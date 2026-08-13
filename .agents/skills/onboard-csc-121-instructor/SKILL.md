---
name: onboard-csc-121-instructor
description: Guide a new or returning instructor through the CSC-121 Starter, local prerequisites, repository verification, PathMX Player launch, course-readiness boundaries, and the first term decisions. Use when an instructor opens this repository and says start, onboard me, show me around, help me set up, what should I do first, run the course, or otherwise begins a first or resumed course-setup session.
---

# Onboard a CSC-121 instructor

Lead the session. Do not make the instructor discover the repository structure
or know which commands to request.

## Establish the boundary

Tell the instructor that this pass will verify the local workspace, open the
learner course in Player, explain what is and is not ready, and identify one
next decision. State that it will not deploy, create remote repositories,
change course content, or handle learner data without explicit approval.

Read only these files initially:

1. `README.md`
2. `paths/author/course-brief.guide.md`
3. `paths/author/semester-setup.guide.md`
4. `paths/index.path.md`

Inspect `git status --short` before running setup. Preserve all existing work.

## Verify the workspace

Check for Bun first. If it is absent, stop the technical setup and give the
official Bun installation link; do not run a remote installation script.

When Bun is available:

1. Run `bun install --frozen-lockfile`.
2. Run `bun run onboard`.
3. Summarize the result in plain language: tool readiness, exact PathMX
   version, repository state, assignment fixtures, and learner graph size.

If verification fails, diagnose the concrete failure. Do not rewrite course
content or upgrade dependencies merely to make onboarding green. Continue the
read-only course orientation when it remains safe.

## Start and verify Player

Reuse a healthy Player only after confirming it belongs to this checkout.
Otherwise start the repository's long-running `bun run play:open` command and
keep it running for the instructor. If port 3000 belongs to another process,
choose a free port with the pinned CLI rather than stopping the process.

Capture the printed launch URL. Open it with an integrated browser when one is
available; otherwise give the instructor a clickable local URL. Verify that:

- the home route identifies `CSC-121: Introduction to Programming`;
- the Week 1 link resolves; and
- the running page comes from this checkout.

Do not treat a server banner as verification. Report the verified course-home
URL and how the instructor can stop the server later.

## Give the short tour

Orient the instructor to four things, without dumping the whole repository:

1. The learner sees one course Root and a 15-week journey.
2. Weeks 1 and 2 are pilot-ready; Weeks 3–15 are concrete maps that still need
   instructor preparation.
3. `paths/author/` owns the course brief, setup, facilitation, and readiness
   guidance outside learner navigation.
4. `assignment-templates/` and `operations/` keep assignment distribution,
   deployment, and agents replaceable rather than embedded in the curriculum.

Open or link the course home, Week 1, the course brief, and semester checklist.
Use the `teach` skill for curriculum decisions and the `pathmx` skill for
Source or Player work later in the session.

## Move one decision at a time

Ask first:

> Are we touring the Starter, or configuring a private copy for a specific
> term?

Do not collect every setup answer at once. If this is a tour, remain read-only
and demonstrate the first learner journey. If this is a term setup, confirm
that the repository is an appropriate private term copy before writing dates,
contact details, course URLs, or institutional policy.

Then guide these decisions in order, one short question at a time:

1. term, first meeting, and weekly meeting pattern;
2. supported Python/editor environment and learner recovery option;
3. assignment distribution pilot: Classroom 50 or plain GitHub;
4. institution-approved syllabus, accessibility, integrity, and LMS details;
5. the next release slice, normally Weeks 3–5;
6. deployment only after the local teaching loop is proven.

Recommend a choice when the repository provides a baseline, explain its
tradeoff briefly, and let the instructor decide. Ask before editing files.

## Close or resume

At a stopping point, give a compact status with:

- verified Player URL and whether the server is still running;
- checks that passed or failed;
- ready scope and remaining preparation scope;
- decisions made this session;
- the single next action;
- the resume phrase: `Continue instructor setup`.

Do not claim the course is release-ready while mapped weeks remain unfinished.
