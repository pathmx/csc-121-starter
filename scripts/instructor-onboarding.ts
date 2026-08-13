#!/usr/bin/env bun

import path from "node:path"
import { readFile } from "node:fs/promises"

const root = path.resolve(import.meta.dir, "..")

type Check = {
  label: string
  detail: string
  status: "ready" | "attention"
}

function command(args: string[]) {
  const result = Bun.spawnSync(args, {
    cwd: root,
    stdin: "ignore",
    stdout: "pipe",
    stderr: "pipe",
  })
  return {
    exitCode: result.exitCode,
    stdout: result.stdout.toString().trim(),
    stderr: result.stderr.toString().trim(),
  }
}

async function fileExists(relativePath: string) {
  return Bun.file(path.join(root, relativePath)).exists()
}

const checks: Check[] = []
const add = (label: string, detail: string, ready = true) => {
  checks.push({ label, detail, status: ready ? "ready" : "attention" })
}

add("Bun", `Bun ${Bun.version}`)

const git = command(["git", "--version"])
add("Git", git.stdout || git.stderr || "not available", git.exitCode === 0)

const python = command(["python3", "--version"])
add(
  "Python",
  python.stdout || python.stderr || "python3 is not available",
  python.exitCode === 0,
)

const branch = command(["git", "branch", "--show-current"])
const status = command(["git", "status", "--short"])
add(
  "Repository",
  branch.exitCode === 0
    ? `${branch.stdout || "detached HEAD"}; ${status.stdout ? "working tree has changes" : "working tree clean"}`
    : branch.stderr || "not a Git repository",
  branch.exitCode === 0 && status.exitCode === 0,
)

const packageJson = JSON.parse(
  await readFile(path.join(root, "package.json"), "utf8"),
)
const baseline = packageJson.pathmxCompatibility?.baseline
const installedPathMX = await fileExists(
  "node_modules/@fellowhumans/pathmx/package.json",
)
let installedVersion = "not installed"
if (installedPathMX) {
  const installedPackage = JSON.parse(
    await readFile(
      path.join(root, "node_modules/@fellowhumans/pathmx/package.json"),
      "utf8",
    ),
  )
  installedVersion = installedPackage.version
}
add(
  "PathMX",
  `installed ${installedVersion}; repository baseline ${baseline ?? "missing"}`,
  installedVersion === baseline &&
    packageJson.dependencies?.["@fellowhumans/pathmx"] === baseline,
)

const onboardingFiles = [
  ".agents/skills/onboard-csc-121-instructor/SKILL.md",
  "paths/author/course-brief.guide.md",
  "paths/author/semester-setup.guide.md",
  "paths/index.path.md",
]
const missingOnboardingFiles: string[] = []
for (const file of onboardingFiles) {
  if (!(await fileExists(file))) missingOnboardingFiles.push(file)
}
add(
  "Instructor guide",
  missingOnboardingFiles.length === 0
    ? "agent skill, course brief, semester checklist, and learner Root found"
    : `missing ${missingOnboardingFiles.join(", ")}`,
  missingOnboardingFiles.length === 0,
)

process.stdout.write("CSC-121 instructor onboarding preflight\n\n")
for (const check of checks) {
  const marker = check.status === "ready" ? "READY" : "ATTENTION"
  process.stdout.write(`${marker.padEnd(9)} ${check.label}: ${check.detail}\n`)
}
process.stdout.write(
  "\nCourse readiness: Weeks 1-2 pilot-ready; Weeks 3-15 mapped for instructor preparation.\n",
)

if (checks.some((check) => check.status === "attention")) {
  process.stderr.write(
    "\nResolve the attention items before running the full course verification.\n",
  )
  process.exit(1)
}

process.stdout.write("Next: full repository and PathMX verification.\n")
