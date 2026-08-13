# CSC-121 course starter

This is a reusable, PathMX-authored baseline for a project-based introduction
to programming with Python. It distills the stable course flow from three
previous CSC-121 offerings without carrying forward student records,
term-specific links, or custom grading machinery.

The complete 15-week journey is mapped. Weeks 1 and 2 are the pilot-ready
teaching slice; later weeks name the capability, practice, and evidence an
instructor should prepare. Treat those mapped weeks as an adaptation plan, not
as finished lessons.

## Start here

For a guided instructor setup, open a terminal in this repository and run one
of these:

```sh
codex "Onboard me as the CSC-121 instructor."
claude "Onboard me as the CSC-121 instructor."
```

The agent will check the workspace, run the course verification, start Player,
show the learner experience, explain what is ready, and guide one setup choice
at a time. See [Start here, instructor](./INSTRUCTOR-START.md) for the complete
contract and manual fallback.

Without an agent:

1. Install [Bun](https://bun.sh/) and clone this repository.
2. Run the verified setup:

   ```sh
   bun install --frozen-lockfile
   bun run onboard
   bun run play:open
   ```

3. Read [the course brief](./paths/author/course-brief.guide.md).
4. Complete [the semester setup checklist](./paths/author/semester-setup.guide.md).
5. Adapt the bracketed course details in
   [the syllabus template](./paths/course/syllabus.guide.md).

The learner home is `paths/index.path.md`. Instructor-only material is under
`paths/author/` and is deliberately not linked into the learner graph.

## What is ready

- **Mapped:** audience, course promise, outcomes, 15-week sequence, evidence,
  assignment-repository model, and final performance.
- **Pilot-ready:** Weeks 1 and 2, including lessons, guided labs, independent
  projects, self-checks, and repository templates.
- **Needs instructor adaptation:** term dates, institutional policies,
  assignment service, later-week lesson details, exam prompts, and deployment
  credentials.

## Repository map

- `paths/` — learner curriculum, references, and instructor guides.
- `assignment-templates/` — sanitized starter repositories for practice,
  projects, exams, and the final project.
- `operations/` — Classroom 50, plain GitHub, deployment, and agent workflows.
- `.agents/skills/` — official PathMX skills plus the course-owned instructor
  onboarding skill.
- `INSTRUCTOR-START.md` — one-command Codex or Claude Code onboarding.
- `.github/workflows/` — clean verification and an explicit manual deploy.
- `scripts/check.ts` — repository hygiene plus a clean PathMX build check.

## Course shape

The default calendar uses 15 weeks:

- Weeks 1–5: programming fundamentals and a transfer exam.
- Weeks 6–10: structured data, file I/O, modules, packages, and a second exam.
- Weeks 11–15: a proposed, tested, documented, and presented final project.

Each ordinary week follows the same rhythm:

1. model a capability in lecture;
2. practice it with support in lab;
3. apply it independently in a project;
4. commit, submit, explain, and use feedback.

## Assignment repositories

GitHub Classroom shuts down on August 28, 2026, so this Starter does not
contain Classroom invitation links or API dependencies. The recommended first
trial is Classroom 50's web interface. Every assignment template also works
with ordinary GitHub repositories if the instructor prefers a lower-level
fallback. See [Classroom 50 setup](./operations/classroom50.guide.md) and
[plain GitHub fallback](./operations/plain-github-fallback.guide.md).

## PathMX and deployment

The repository pins PathMX `0.3.0` in both `package.json` and `bun.lock`.
Preview locally before publishing. The included GitHub workflow verifies every
pull request and push; deployment is a separate manual action requiring a
protected `production` environment and Cloudflare credentials.

PathMX is installed locally by `bun install`; instructors do not need a global
CLI. See [PathMX and deployment](./operations/deployment.guide.md) and
[agent workflows](./operations/agent-workflows.guide.md).

## Privacy boundary

Never add real rosters, learner profiles, submissions, grades, emails,
credentials, or downloaded student repositories to this Starter. Create a
private term repository or private operational store for those records.
