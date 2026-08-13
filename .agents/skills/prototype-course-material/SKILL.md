---
name: prototype-course-material
description: Prototype, revise, connect, preview, review, and prepare PathMX lectures, lessons, labs, assignments, assessments, modules, and teaching weeks in this CSC-121 Starter. Use when an instructor asks to draft or prototype course material, turn a teaching goal into activities, build a week, review learning alignment, preview material in Player, connect an approved draft, or publish approved curriculum.
---

# Prototype course material

Help the instructor move from a teaching goal to a small, reviewable PathMX
prototype. Default to a useful draft, not a commitment to a semester structure.

## Establish the learning shape

Read:

1. `paths/author/course-brief.guide.md`;
2. the nearest relevant learner Source, if one exists; and
3. the appropriate file or folder under `paths/templates/week/`.

Use the installed `teach` skill for the learning journey and the installed
`pathmx` skill for Source syntax, graph behavior, Player, and verification.

Gather only information that would materially change the prototype:

- learner starting point;
- one capability;
- time available; and
- observable evidence.

When some information is missing, make reasonable draft assumptions, state
them, and keep moving. Do not turn a small authoring request into a course-design
interview.

## Draft outside learner navigation

Put new work under `paths/drafts/<clear-slug>/` by default. Do not add a link
from the course Root, a live week, or another learner-facing Source until the
instructor approves the draft.

Choose the smallest useful artifact shape:

- **Lesson:** orientation, complete example, guided attempt, check.
- **Lab:** setup, supported attempt, independent challenge, recovery help,
  finish evidence.
- **Assignment:** user or purpose, required behavior, work phases, evidence,
  optional stretch.
- **Assessment:** predict, explain, transfer.
- **Week:** one index plus only the lesson, lab, assignment, and assessment that
  the capability needs.

For a broad multi-file request, briefly show the proposed journey and key
assumptions before producing a large draft. When the instructor directly asks
for a complete draft, author it and report those assumptions in the handoff.

Prefer ordinary Markdown, short Blocks separated by `---`, meaningful links,
and plain instructions. Add specialized components or directives only when they
materially improve the learner experience.

## Review before connecting

Review the draft through four lenses:

1. **Learning:** Does every activity prepare the learner for the evidence?
2. **Journey:** Are preparation, time, transitions, recovery, and finish clear?
3. **Access:** Are tools, accounts, privacy, permitted help, and alternatives
   explicit where needed?
4. **PathMX:** Do roles, links, Blocks, and Player pacing match the intent?

Treat Thonny, no-AI practice, paper assessment, Git, Codespaces, and agent use
as instructor choices. Do not silently insert them as universal requirements.
Never include real student data, grades, accommodations, credentials, private
feedback, or answer keys intended to remain restricted.

## Verify proportionately

Inspect `git diff --check` and run `bun run check`. For a new unlinked draft,
build its named entry Source into a disposable output directory so its own graph
and rendering are checked. Use the local Player route when visual pacing or
navigation matters. Remove only scratch output created during this task.

Report what was actually verified. A successful command launch is not a Player
or build result.

## Connect and publish only with approval

Ask before linking a draft into learner navigation. After approval:

1. add the smallest meaningful link from the intended Source;
2. rerun `bun run check`;
3. inspect the course in Player; and
4. report the learner-facing route.

Public Share is a separate external mutation. Ask explicitly before running it.
Read `operations/sharing.guide.md`, ensure the ignored environment has
`PATHMX_SHARE_TOKEN`, never print the token, run `bun run share:course`, and
verify the returned public page. The instructor remains the final publisher.

## Close the authoring pass

Give a compact handoff:

- capability and evidence;
- draft or connected file paths;
- assumptions still needing instructor judgment;
- checks and Player routes actually verified;
- whether anything was linked or publicly shared; and
- one useful next action.
