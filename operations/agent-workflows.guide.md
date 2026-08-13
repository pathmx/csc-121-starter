# Agent workflows for the instructor

Coding agents are optional collaborators. The course remains operable with an
editor, terminal, GitHub, PathMX, and the instructor's own judgment.

## First session

From the repository root, start either supported agent with the onboarding
request:

```sh
codex "Onboard me as the CSC-121 instructor."
claude "Onboard me as the CSC-121 instructor."
```

Both discover the repository-owned `onboard-csc-121-instructor` skill through
`.agents/skills` and `.claude/skills`. The agent should run the preflight and
full check, keep Player running, verify the course home, explain the readiness
boundary, and ask first whether this is a tour or a private term setup.

To resume later, say:

> Continue instructor setup.

## Install or refresh the managed skills

The Starter already contains the official `teach`, `pathmx`, and `learn`
skills under `.agents/skills/`. Their exact source revision is recorded in
`.agents/pathmx-skills.receipt.json`.

After cloning, no global agent package is required. To refresh those managed
files deliberately, run the repository-pinned PathMX command:

```sh
bun install --frozen-lockfile
bunx pathmx init --skills
git diff -- .agents .claude
bun run check
```

Review and commit the skill update as its own change. Do not hand-edit managed
skill files. A skill refresh changes agent guidance; it does not publish the
course or create remote repositories.

## Initial setup

Open the repository in Codex, Claude Code, or another repository-aware agent.
The agent should read `AGENTS.md` automatically. If it does not, ask it to read
that file before proceeding.

Useful first request:

> Read the repository instructions, course brief, schedule, and Week 1. Report
> the exact local check and preview commands. Do not edit files yet.

## Prepare a week

> Use the Week template and the existing course brief to prepare Week 3 on
> loops and state. Preserve the stated Unit 1 evidence. First show me the
> capability, worked example, lab, project, self-check, and any decision you
> need from me. Do not publish or create assignment repositories.

The instructor reviews learning goals, factual correctness, examples, policy,
and final presentation. The agent may help with structure, consistency,
PathMX syntax, code fixtures, and verification.

## Review a learner-facing change

> Review the changed Sources in four passes: learning alignment, learner
> journey, access, and PathMX behavior. Run the repository check. Distinguish
> observed evidence from suggestions. Do not change grades or private cohort
> data.

## Prepare assignment evidence

In a private term repository, an agent may:

- clone the intended assignment repositories with existing credentials;
- run documented commands in a safe fixture environment;
- summarize commits, tests, and runtime errors;
- draft rubric-aligned feedback;
- identify submissions needing human review.

The instructor must review the actual student work and owns the final grade and
feedback. Never feed one student's private work into another student's prompt
or commit private records to this Starter.

## Maintain the course

Good bounded requests include:

- “Find term-specific dates or URLs in reusable Sources.”
- “Check whether every ready week links a lesson, lab, project, and self-check.”
- “Run the clean PathMX check and inspect the exact changed route.”
- “Compare this new lab with its stated project evidence.”
- “Update a current-tools appendix from authoritative sources while keeping
  the durable policy vendor-neutral.”

Avoid requests such as “modernize everything,” “personalize the whole class,”
or “grade all students” without a reviewed scope, privacy boundary, and sample
output.
