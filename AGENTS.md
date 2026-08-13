# CSC-121 Starter instructions

This repository is a reusable course baseline for multiple learners. Keep it
calm enough that a technically capable instructor who is new to PathMX can
understand and operate it without reverse-engineering hidden automation.

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
- Do not edit managed files under `.agents/skills`; refresh them with
  `pathmx init --skills`.
