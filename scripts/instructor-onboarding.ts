#!/usr/bin/env bun

import path from "node:path"
import { readFile } from "node:fs/promises"

const root = path.resolve(import.meta.dir, "..")

type Status = "ready" | "info" | "attention"
type Check = { label: string; detail: string; status: Status }

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

const checks: Check[] = [{ label: "Bun", detail: `Bun ${Bun.version}`, status: "ready" }]

const git = command(["git", "--version"])
const branch = command(["git", "branch", "--show-current"])
const status = command(["git", "status", "--short"])
if (git.exitCode !== 0) {
  checks.push({ label: "Git", detail: "optional for the first authoring lab; not installed", status: "info" })
} else if (branch.exitCode !== 0) {
  checks.push({ label: "Git", detail: `${git.stdout}; this folder is not yet a Git repository`, status: "info" })
} else {
  checks.push({
    label: "Git",
    detail: `${branch.stdout || "detached HEAD"}; ${status.stdout ? "working tree has changes" : "working tree clean"}`,
    status: "info",
  })
}

const python = command(["python3", "--version"])
checks.push({
  label: "Python",
  detail: python.exitCode === 0 ? python.stdout || python.stderr : "optional here; students can use the Python bundled with Thonny",
  status: "info",
})

const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"))
const baseline = packageJson.pathmxCompatibility?.baseline
let installedVersion = "not installed"
if (await fileExists("node_modules/@fellowhumans/pathmx/package.json")) {
  const installedPackage = JSON.parse(
    await readFile(path.join(root, "node_modules/@fellowhumans/pathmx/package.json"), "utf8"),
  )
  installedVersion = installedPackage.version
}
checks.push({
  label: "PathMX",
  detail: `installed ${installedVersion}; Starter baseline ${baseline ?? "missing"}`,
  status:
    installedVersion === baseline && packageJson.dependencies?.["@fellowhumans/pathmx"] === baseline
      ? "ready"
      : "attention",
})

const onboardingFiles = [
  ".agents/skills/onboard-csc-121-instructor/SKILL.md",
  ".agents/skills/prototype-course-material/SKILL.md",
  "paths/author/pathmx-overview.guide.md",
  "paths/author/authoring-lab.path.md",
  "paths/example-week/index.path.md",
  "paths/index.path.md",
]
const missing: string[] = []
for (const file of onboardingFiles) {
  if (!(await fileExists(file))) missing.push(file)
}
checks.push({
  label: "Starter",
  detail: missing.length === 0 ? "overview, authoring lab, example week, and agent workflows found" : `missing ${missing.join(", ")}`,
  status: missing.length === 0 ? "ready" : "attention",
})

process.stdout.write("CSC-121 instructor onboarding preflight\n\n")
for (const check of checks) {
  process.stdout.write(`${check.status.toUpperCase().padEnd(9)} ${check.label}: ${check.detail}\n`)
}
process.stdout.write(
  "\nStarter scope: one adaptable example week; no semester structure or student toolchain required.\n",
)

if (checks.some((check) => check.status === "attention")) {
  process.stderr.write("\nResolve the attention items before running the full verification.\n")
  process.exit(1)
}

process.stdout.write("Next: verify the learner graph, links, and example files.\n")
