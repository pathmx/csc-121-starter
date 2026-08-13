# CSC-121 course starter

This is a reusable baseline for an introduction to programming with Python.
PathMX provides a calm course website for guided lessons, labs, projects, and
references. Students begin with Thonny and ordinary Python files; GitHub,
Codespaces, and agent-assisted project workflows arrive only after they have
built basic programming fluency.

The Starter distills the stable course flow from three previous CSC-121
offerings without carrying forward student records, term-specific links, or
custom grading machinery.

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
  staged tool progression, paper exams, and final performance.
- **Pilot-ready:** Weeks 1 and 2, including lessons, guided labs, independent
  applications, self-checks, Thonny instructions, and downloadable Python
  files.
- **Needs instructor adaptation:** term dates, institutional policies,
  early submission method, later GitHub project workflow, later-week lesson
  details, exam prompts, and deployment credentials.

## Repository map

- `paths/` — learner curriculum, references, and instructor guides.
- `assignment-templates/` — sanitized Python starter folders for early
  download and later project repositories.
- `operations/` — later-course GitHub options, deployment, and instructor
  agent workflows.
- `.agents/skills/` — official PathMX skills plus the course-owned instructor
  onboarding skill.
- `INSTRUCTOR-START.md` — one-command Codex or Claude Code onboarding.
- `.github/workflows/` — clean verification and an explicit manual deploy.
- `scripts/check.ts` — repository hygiene plus a clean PathMX build check.

## Course shape

The default calendar uses 15 weeks:

- Weeks 1–5: programming fundamentals in Thonny, manual code practice, and a
  pencil-and-paper transfer exam.
- Weeks 6–10: a supported transition to Codespaces and Git, followed by an
  applied data project and a second pencil-and-paper exam.
- Weeks 11–15: a proposed, tested, documented, and presented final project.

Each ordinary week follows the same rhythm:

1. model a capability in lecture;
2. practice it with support in lab;
3. apply it independently in a small application or project;
4. save, submit, explain, and use feedback.

In the project phase, Git commits become part of that loop. They are not an
entry requirement for learning the first Python concepts.

## Student tools and assignment distribution

For the foundations unit, the simplest baseline is Thonny plus files delivered
and collected through the institution's LMS. Students should not need a
GitHub account, terminal workflow, or coding agent to complete the first unit.

For applied and final projects, introduce VS Code in GitHub Codespaces and a
small Git workflow as course content. [GitHub Classroom is being
decommissioned](https://github.blog/changelog/2026-05-26-github-classroom-sign-ups-are-no-longer-available/)
on August 28, 2026, so the Starter does not depend on it. Classroom 50 or plain
GitHub can be piloted later, after students are ready for repository-based
projects. See [Classroom 50 setup](./operations/classroom50.guide.md) and
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

## License

The course Sources, assignment templates, documentation, and supporting code
are available under the [MIT License](./LICENSE). You may adapt the Starter for
another course or institution while preserving the copyright and license
notice.
