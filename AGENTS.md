# CSC-121 Starter instructions

This repository is a reusable course baseline for multiple learners. Keep it
calm enough that a technically capable instructor who is new to PathMX can
understand and operate it without reverse-engineering hidden automation.

## Instructor onboarding trigger

When an instructor begins with a broad request such as “start,” “onboard me,”
“show me around,” “help me set this up,” or “what should I do first,” use the
installed `onboard-csc-121-instructor` skill. Lead the setup proactively: run
the safe local preflight and course check, start and verify Player, explain the
honest readiness boundary, and guide one decision at a time. Do not require the
instructor to know the skill name or repository structure.

Do not deploy, create remote repositories, edit course content, or collect
private term information during the initial tour without explicit approval.

## Before changing the course

1. Read `README.md`, `paths/author/course-brief.guide.md`, and the nearest unit
   or week Source.
2. Use the installed `teach` skill for curriculum or shared-learning work.
3. Use the installed `pathmx` skill for Source, configuration, build, Player,
   or publishing work.
4. Run `bun install --frozen-lockfile` when dependencies are missing.
5. Run `bun run check` before handoff.

## Course boundaries

- Keep `paths/index.path.md` as the single learner Root.
- Keep instructor notes under `paths/author/` and outside learner navigation.
- Keep Unit 1 runnable in Thonny without GitHub, a terminal, or generative AI.
- Keep unit exams pencil-and-paper assessments; do not create exam repositories.
- Introduce Codespaces and Git as taught Unit 2 project capabilities, not entry
  requirements.
- Design from observable student work. Every activity should support a named
  capability and every capability should have evidence.
- Keep ordinary Markdown understandable outside PathMX.
- Use fictional people and data in examples.
- Do not add a new platform dependency when a documented convention suffices.

## Privacy and operations

- Never commit real rosters, submissions, grades, email addresses, student
  paths, credentials, or downloaded repositories.
- Keep assignment distribution swappable. Curriculum Sources may describe a
  repository role, but must not contain a live Classroom 50 class ID or an old
  GitHub Classroom invitation URL.
- Keep grading and agent automation optional. The manual teacher workflow must
  remain documented and usable.
- Do not deploy or create remote repositories unless the maintainer asks.

## PathMX version safety

- The exact dependency and lockfile define valid syntax.
- Test an update in a clean commit, run `bun run check`, and inspect the exact
  Player route before changing `pathmxCompatibility.baseline`.
- Do not edit the official `learn`, `pathmx`, or `teach` skill directories;
  refresh them with `pathmx init --skills`.
- `onboard-csc-121-instructor` is repository-owned and must remain intact when
  the official skills are refreshed.
- The canonical public template must not track
  `.agents/pathmx-skills.receipt.json`. PathMX reserves that receipt for each
  newly initialized workspace. When maintaining the canonical template,
  refresh official skills with `pathmx init --skills --force`, review the
  managed skill changes, remove the generated receipt before committing, and
  run `bun run check`.
