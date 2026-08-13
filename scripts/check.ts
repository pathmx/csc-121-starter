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
  "paths/config/index.config.md",
  "paths/index.path.md",
  "paths/author/course-brief.guide.md",
  "paths/author/semester-setup.guide.md",
  "paths/author/weekly-workflow.guide.md",
  "paths/course/syllabus.guide.md",
  "paths/course/schedule.path.md",
  "paths/units/01-programming-fundamentals/index.path.md",
  "paths/units/01-programming-fundamentals/01-first-program/index.path.md",
  "paths/units/01-programming-fundamentals/01-first-program/01-output-values-variables.lesson.md",
  "paths/units/01-programming-fundamentals/01-first-program/02-gutenberg.lab.md",
  "paths/units/01-programming-fundamentals/01-first-program/03-me.project.md",
  "paths/units/01-programming-fundamentals/01-first-program/week.assessment.md",
  "paths/units/01-programming-fundamentals/02-input-and-decisions/index.path.md",
  "paths/units/01-programming-fundamentals/02-input-and-decisions/01-ask-convert-decide.lesson.md",
  "paths/units/01-programming-fundamentals/02-input-and-decisions/02-interactive-kiosk.lab.md",
  "paths/units/01-programming-fundamentals/02-input-and-decisions/03-you.project.md",
  "paths/units/01-programming-fundamentals/02-input-and-decisions/week.assessment.md",
  "paths/units/02-applied-programming/index.path.md",
  "paths/units/03-final-project/index.path.md",
  "assignment-templates/practice/README.md",
  "assignment-templates/unit-1-projects/README.md",
  "assignment-templates/unit-1-exam/README.md",
  "assignment-templates/unit-2-project/README.md",
  "assignment-templates/unit-2-exam/README.md",
  "assignment-templates/final-project/README.md",
  "assignment-templates/final-project/AGENTS.md",
  "operations/classroom50.guide.md",
  "operations/plain-github-fallback.guide.md",
  "operations/deployment.guide.md",
  "operations/agent-workflows.guide.md",
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
    throw new Error(
      "package.json must pin the verified PathMX 0.3.0 baseline exactly",
    )
  }
  if (installedPackage.version !== baseline) {
    throw new Error(
      `Installed PathMX ${installedPackage.version} differs from baseline ${baseline}`,
    )
  }
  if (
    packageJson.scripts?.["onboard:preflight"] !==
      "bun run scripts/instructor-onboarding.ts" ||
    packageJson.scripts?.onboard !== "bun run onboard:preflight && bun run check"
  ) {
    throw new Error("package.json must preserve the instructor onboarding commands")
  }

  const config = await read("paths/config/index.config.md")
  const configuredPaths = [
    ...config.matchAll(/\]\((\.\.\/[^)]+\.md)\)/g),
  ].map((match) => match[1])
  if (
    configuredPaths.length !== 1 ||
    configuredPaths[0] !== "../index.path.md"
  ) {
    throw new Error(
      "Config must keep paths/index.path.md as the single learner Root",
    )
  }

  const readyWeeks = [
    "paths/units/01-programming-fundamentals/01-first-program/index.path.md",
    "paths/units/01-programming-fundamentals/02-input-and-decisions/index.path.md",
  ]
  for (const week of readyWeeks) {
    const source = await read(week)
    for (const role of [".lesson.md", ".lab.md", ".project.md", ".assessment.md"]) {
      if (!source.includes(role)) {
        throw new Error(`${week} does not link a ${role} Source`)
      }
    }
  }

  const textFiles = await Array.fromAsync(
    new Bun.Glob("**/*.{md,json,yml,yaml,ts,tsx,py}").scan({
      cwd: root,
      onlyFiles: true,
    }),
  )
  for (const file of textFiles) {
    if (
      file.startsWith("node_modules/") ||
      file.startsWith(".pathmx") ||
      file.startsWith(".git/")
    ) {
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
    const content = await read(file)
    const links = [...content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)].map(
      (match) => match[1].trim(),
    )
    for (const link of links) {
      if (
        link.startsWith("#") ||
        link.startsWith("/") ||
        /^[a-z][a-z0-9+.-]*:/i.test(link)
      ) {
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

async function run(
  command: string[],
  cwd = root,
  input?: string,
): Promise<{ stdout: string; stderr: string }> {
  const child = Bun.spawn(command, {
    cwd,
    stdin: input === undefined ? "ignore" : "pipe",
    stdout: "pipe",
    stderr: "pipe",
  })
  if (input !== undefined && child.stdin) {
    child.stdin.write(input)
    child.stdin.end()
  }
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(child.stdout).text(),
    new Response(child.stderr).text(),
    child.exited,
  ])
  if (exitCode !== 0) {
    throw new Error(
      `${command.join(" ")} failed (${exitCode})\n${stdout}\n${stderr}`.trim(),
    )
  }
  return { stdout, stderr }
}

async function assertAssignmentFixtures() {
  const fixtures = [
    {
      directory: "assignment-templates/practice",
      command: ["python3", "week-01/lab.py"],
      expected: "practice repository is ready",
    },
    {
      directory: "assignment-templates/practice",
      command: ["python3", "week-02/lab.py"],
      input: "Test Learner\n",
      expected: "Welcome, Test Learner",
    },
    {
      directory: "assignment-templates/unit-1-projects",
      command: ["python3", "projects/01-me/me.py"],
      expected: "Project 1 starter is ready",
    },
    {
      directory: "assignment-templates/unit-1-projects",
      command: ["python3", "projects/02-you/you.py"],
      input: "Test Learner\n",
      expected: "Project 2 is ready for Test Learner",
    },
    {
      directory: "assignment-templates/unit-1-exam",
      command: ["python3", "main.py"],
      expected: "Unit 1 exam environment check passed",
    },
    {
      directory: "assignment-templates/unit-2-project",
      command: ["python3", "main.py"],
      expected: "Loaded 3 fictional records",
    },
    {
      directory: "assignment-templates/unit-2-exam",
      command: ["python3", "main.py"],
      expected: "loaded 2 records",
    },
    {
      directory: "assignment-templates/final-project",
      command: ["python3", "main.py"],
      expected: "Final project repository is ready",
    },
  ] as const

  for (const fixture of fixtures) {
    const result = await run(
      [...fixture.command],
      path.join(root, fixture.directory),
      "input" in fixture ? fixture.input : undefined,
    )
    if (!result.stdout.includes(fixture.expected)) {
      throw new Error(
        `${fixture.directory} did not emit expected text: ${fixture.expected}`,
      )
    }
  }
}

async function assertBuild() {
  const result = await run([
    binary,
    "build",
    "paths/index.path.md",
    "-o",
    output,
    "--clean",
  ])
  const diagnostics = `${result.stdout}\n${result.stderr}`.trim()
  if (/\b(?:warning|error):/i.test(diagnostics)) {
    throw new Error(`PathMX reported diagnostics:\n${diagnostics}`)
  }

  const graphFiles = await Array.fromAsync(
    new Bun.Glob("**/__pathmx/publications/pathmx%2Fgraph").scan({
      cwd: output,
      onlyFiles: true,
    }),
  )
  if (graphFiles.length !== 1) {
    throw new Error(
      `Expected one PathMX graph publication, found ${graphFiles.length}`,
    )
  }
  const graph = JSON.parse(await readFile(path.join(output, graphFiles[0]), "utf8"))
  if (
    graph.type !== "pathmx:root-publication-view" ||
    graph.root?.sourceId !== "index.path" ||
    graph.publicationId !== "pathmx/graph"
  ) {
    throw new Error("Build did not emit the expected index.path graph publication")
  }
  const sources = graph.publication?.members?.sources?.records?.upsert ?? {}
  const sourceIds = new Set<string>(Object.keys(sources))
  if (
    graph.publication?.freshness?.state !== "current" ||
    graph.publication?.freshness?.indexedSources !== sourceIds.size ||
    graph.publication?.freshness?.totalSources !== sourceIds.size
  ) {
    throw new Error("Built learner graph is not current and fully indexed")
  }

  const expected = [
    "index.path",
    "course/getting-started.path",
    "course/policies.guide",
    "units/01-programming-fundamentals/index.path",
    "units/01-programming-fundamentals/01-first-program/index.path",
    "units/01-programming-fundamentals/01-first-program/01-output-values-variables.lesson",
    "units/01-programming-fundamentals/02-input-and-decisions/03-you.project",
    "units/02-applied-programming/index.path",
    "units/03-final-project/index.path",
  ]
  for (const id of expected) {
    if (!sourceIds.has(id)) {
      throw new Error(`Built learner graph is missing Source: ${id}`)
    }
  }

  for (const privateId of [
    "author/course-brief.guide",
    "author/semester-setup.guide",
    "author/weekly-workflow.guide",
    "templates/week/index.path",
  ]) {
    if (sourceIds.has(privateId)) {
      throw new Error(`Learner graph unexpectedly includes: ${privateId}`)
    }
  }

  return diagnostics
}

try {
  await assertRepositoryShape()
  await assertAssignmentFixtures()
  const diagnostics = await assertBuild()
  process.stdout.write(
    `${diagnostics}\nRepository hygiene passed.\nAssignment fixtures passed.\nVerified PathMX baseline 0.3.0.\n`,
  )
} finally {
  await rm(output, { recursive: true, force: true })
}
