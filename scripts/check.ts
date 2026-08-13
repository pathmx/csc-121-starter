#!/usr/bin/env bun

import { access, mkdtemp, readFile, rm } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

const root = path.resolve(import.meta.dir, "..")
const output = await mkdtemp(path.join(os.tmpdir(), "csc-121-starter-check-"))
const binary = path.join(root, "node_modules", ".bin", "pathmx")

const requiredFiles = [
  "AGENTS.md",
  "INSTRUCTOR-START.md",
  "LICENSE",
  "README.md",
  ".agents/skills/onboard-csc-121-instructor/SKILL.md",
  ".agents/skills/onboard-csc-121-instructor/agents/openai.yaml",
  ".agents/skills/prototype-course-material/SKILL.md",
  ".agents/skills/prototype-course-material/agents/openai.yaml",
  "paths/config/index.config.md",
  "paths/index.path.md",
  "paths/author/pathmx-overview.guide.md",
  "paths/author/authoring-lab.path.md",
  "paths/author/course-brief.guide.md",
  "paths/author/semester-setup.guide.md",
  "paths/author/try-csc-121-starter.guide.md",
  "paths/author/weekly-workflow.guide.md",
  "paths/example-week/index.path.md",
  "paths/example-week/01-output-values-variables.lesson.md",
  "paths/example-week/02-gutenberg.lab.md",
  "paths/example-week/03-profile-card.project.md",
  "paths/example-week/week.assessment.md",
  "paths/resources/index.guide.md",
  "paths/resources/run-python.guide.md",
  "paths/resources/debugging.guide.md",
  "starter-files/example-week/lab.py",
  "starter-files/example-week/profile-card.py",
  "operations/agent-workflows.guide.md",
  "operations/later-project-tools.guide.md",
  "operations/sharing.guide.md",
  "scripts/instructor-onboarding.ts",
] as const

const forbiddenLegacyPatterns = [
  /classroom\.github\.com\//i,
  /(?:csc-121|cs121)\.path\.app/i,
  /pathwright\.com\/library/i,
  /@pathml\/core/i,
  /mjohnson8?@/i,
] as const

async function read(relativePath: string) {
  return readFile(path.join(root, relativePath), "utf8")
}

async function repositoryFiles(pattern: string) {
  return Array.fromAsync(
    new Bun.Glob(pattern).scan({ cwd: root, onlyFiles: true }),
  )
}

async function assertRepositoryShape() {
  for (const file of requiredFiles) {
    if (!(await Bun.file(path.join(root, file)).exists())) {
      throw new Error(`Missing required Starter file: ${file}`)
    }
  }

  const packageJson = JSON.parse(await read("package.json"))
  const baseline = packageJson.pathmxCompatibility?.baseline
  const dependency = packageJson.dependencies?.["@fellowhumans/pathmx"]
  const installedPackage = JSON.parse(
    await read("node_modules/@fellowhumans/pathmx/package.json"),
  )
  if (baseline !== "0.3.0" || dependency !== baseline) {
    throw new Error("package.json must pin the verified PathMX 0.3.0 baseline")
  }
  if (installedPackage.version !== baseline) {
    throw new Error(
      `Installed PathMX ${installedPackage.version} differs from baseline ${baseline}`,
    )
  }
  if (
    packageJson.scripts?.onboard !== "bun run onboard:preflight && bun run check" ||
    packageJson.scripts?.["share:course"] !== "pathmx share paths/index.path.md"
  ) {
    throw new Error("package.json is missing the Starter onboarding or Share command")
  }

  const origin = Bun.spawnSync(["git", "remote", "get-url", "origin"], {
    cwd: root,
    stdin: "ignore",
    stdout: "pipe",
    stderr: "ignore",
  })
  const originUrl = origin.exitCode === 0 ? origin.stdout.toString().trim() : ""
  if (
    /github\.com[/:]pathmx\/csc-121-starter(?:\.git)?$/i.test(originUrl) &&
    (await Bun.file(path.join(root, ".agents/pathmx-skills.receipt.json")).exists())
  ) {
    throw new Error("The canonical public template must not track a workspace receipt")
  }

  const config = await read("paths/config/index.config.md")
  const configuredPaths = [...config.matchAll(/\]\((\.\.\/[^)]+\.md)\)/g)].map(
    (match) => match[1],
  )
  if (configuredPaths.length !== 1 || configuredPaths[0] !== "../index.path.md") {
    throw new Error("Config must keep paths/index.path.md as the single learner Root")
  }

  const exampleWeek = await read("paths/example-week/index.path.md")
  for (const role of [".lesson.md", ".lab.md", ".project.md", ".assessment.md"]) {
    if (!exampleWeek.includes(role)) {
      throw new Error(`The example week does not link a ${role} Source`)
    }
  }

  const studentFiles = await repositoryFiles("paths/{course,example-week,resources}/**/*.md")
  const laterToolPattern = /\b(?:GitHub|Codespaces|terminal|git push)\b/i
  for (const file of studentFiles) {
    if (laterToolPattern.test(await read(file))) {
      throw new Error(`The small learner graph introduces a later-course tool in ${file}`)
    }
  }

  const textFiles = await repositoryFiles("**/*.{md,json,yml,yaml,ts,tsx,py}")
  for (const file of textFiles) {
    if (file.startsWith("node_modules/") || file.startsWith(".pathmx") || file.startsWith(".git/")) {
      continue
    }
    const content = await read(file)
    for (const pattern of forbiddenLegacyPatterns) {
      if (pattern.test(content)) {
        throw new Error(`Legacy or private coupling ${pattern} found in ${file}`)
      }
    }
  }

  const authoredMarkdown = textFiles.filter(
    (file) =>
      file.endsWith(".md") &&
      !file.startsWith("node_modules/") &&
      !file.startsWith(".agents/") &&
      !file.startsWith(".claude/") &&
      !file.startsWith(".pathmx") &&
      !file.startsWith(".git/"),
  )
  for (const file of authoredMarkdown) {
    const links = [...(await read(file)).matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map(
      (match) => match[1].trim(),
    )
    for (const link of links) {
      if (link.startsWith("#") || link.startsWith("/") || /^[a-z][a-z0-9+.-]*:/i.test(link)) {
        continue
      }
      const target = decodeURIComponent(link.split(/[?#]/, 1)[0])
      try {
        await access(path.resolve(root, path.dirname(file), target))
      } catch {
        throw new Error(`Broken relative link in ${file}: ${link}`)
      }
    }
  }
}

async function run(command: string[], cwd = root) {
  const child = Bun.spawn(command, {
    cwd,
    env: { ...process.env, PYTHONDONTWRITEBYTECODE: "1" },
    stdin: "ignore",
    stdout: "pipe",
    stderr: "pipe",
  })
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(child.stdout).text(),
    new Response(child.stderr).text(),
    child.exited,
  ])
  if (exitCode !== 0) {
    throw new Error(`${command.join(" ")} failed (${exitCode})\n${stdout}\n${stderr}`.trim())
  }
  return { stdout, stderr }
}

async function assertExampleFiles() {
  const python = Bun.spawnSync(["python3", "--version"], {
    cwd: root,
    stdin: "ignore",
    stdout: "ignore",
    stderr: "ignore",
  })
  if (python.exitCode !== 0) return "Python not present; example files were checked for presence only."

  const fixtures = [
    { file: "starter-files/example-week/lab.py", expected: "example lab file is ready" },
    { file: "starter-files/example-week/profile-card.py", expected: "profile-card starter is ready" },
  ]
  for (const fixture of fixtures) {
    const result = await run(["python3", fixture.file])
    if (!result.stdout.toLowerCase().includes(fixture.expected)) {
      throw new Error(`${fixture.file} did not emit expected text: ${fixture.expected}`)
    }
  }
  return "Example Python files passed."
}

async function assertBuild() {
  const result = await run([binary, "build", "paths/index.path.md", "-o", output, "--clean"])
  const diagnostics = `${result.stdout}\n${result.stderr}`.trim()
  if (/\b(?:warning|error):/i.test(diagnostics)) {
    throw new Error(`PathMX reported diagnostics:\n${diagnostics}`)
  }

  const graphFiles = await Array.fromAsync(
    new Bun.Glob("**/__pathmx/publications/pathmx%2Fgraph").scan({ cwd: output, onlyFiles: true }),
  )
  if (graphFiles.length !== 1) {
    throw new Error(`Expected one PathMX graph publication, found ${graphFiles.length}`)
  }
  const graph = JSON.parse(await readFile(path.join(output, graphFiles[0]), "utf8"))
  const sources = graph.publication?.members?.sources?.records?.upsert ?? {}
  const sourceIds = new Set<string>(Object.keys(sources))
  const expected = new Set([
    "index.path",
    "course/getting-started.path",
    "course/policies.guide",
    "resources/index.guide",
    "resources/run-python.guide",
    "resources/debugging.guide",
    "example-week/index.path",
    "example-week/01-output-values-variables.lesson",
    "example-week/02-gutenberg.lab",
    "example-week/03-profile-card.project",
    "example-week/week.assessment",
  ])
  if (sourceIds.size !== expected.size) {
    throw new Error(`Expected ${expected.size} learner Sources, found ${sourceIds.size}`)
  }
  for (const id of expected) {
    if (!sourceIds.has(id)) throw new Error(`Built learner graph is missing Source: ${id}`)
  }
  for (const id of sourceIds) {
    if (!expected.has(id)) throw new Error(`Learner graph unexpectedly includes: ${id}`)
  }
  if (
    graph.root?.sourceId !== "index.path" ||
    graph.publication?.freshness?.state !== "current" ||
    graph.publication?.freshness?.indexedSources !== sourceIds.size
  ) {
    throw new Error("Built learner graph is not current and fully indexed")
  }
  return diagnostics
}

try {
  await assertRepositoryShape()
  const fixtureResult = await assertExampleFiles()
  const diagnostics = await assertBuild()
  process.stdout.write(
    `${diagnostics}\nRepository hygiene passed.\n${fixtureResult}\nVerified 11-Source learner graph on PathMX 0.3.0.\n`,
  )
} finally {
  await rm(output, { recursive: true, force: true })
}
