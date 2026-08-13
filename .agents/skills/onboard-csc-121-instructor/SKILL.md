---
name: onboard-csc-121-instructor
description: Guide a new or returning instructor through this small CSC-121 PathMX Starter, its curriculum-as-code model, local verification, Player, first authoring lab, and next action. Use when an instructor says start, onboard me, show me PathMX, run the course, help me set up, what should I do first, continue setup, or otherwise begins or resumes an instructor session in this repository.
---

# Onboard a CSC-121 instructor

Lead a brief working session. Do not make the instructor discover repository
structure, request commands by name, or make semester-wide decisions before
seeing the core authoring loop.

## Set the first-session boundary

Explain that the session will:

1. verify the small workspace;
2. open the learner course in Player;
3. connect one Markdown Source to its rendered page;
4. introduce Sources, links, Blocks, View, and Play; and
5. offer one harmless edit or unlinked prototype.

Do not deploy, create remote repositories, restructure the course, collect
private term information, or publish a Share without explicit approval.

Read only these files initially:

1. `README.md`
2. `paths/author/pathmx-overview.guide.md`
3. `paths/author/authoring-lab.path.md`
4. `paths/index.path.md`

Inspect `git status --short` when Git is available. Preserve all existing work.

## Verify the workspace

Check for Bun. If it is absent, explain that Bun is the runtime and package
manager that runs PathMX, give the official installation page, and continue the
read-only orientation. Do not run a remote installation script.

When Bun is available:

1. Run `bun install --frozen-lockfile`.
2. Run `bun run onboard`.
3. Summarize tool readiness, the pinned PathMX version, the 11-Source learner
   graph, and any concrete failure in plain language.

Git and a separate system Python installation are optional for this lab. Thonny
can provide the early student Python experience.

## Start and verify Player

Reuse an existing Player only after confirming it belongs to this checkout.
Otherwise start the long-running `bun run play:open` command and keep it running
for the instructor. Do not stop an unknown process to take its port.

Use the printed local URL. Open it with an integrated browser when available;
otherwise give the instructor the clickable URL. Verify that the page identifies
`CSC-121 Course Site` and that the example-week link resolves. A startup banner
alone is not verification.

## Give the small tour

Explain the repository through the visible example:

- `paths/index.path.md` is the one learner Root.
- Linked Markdown Sources become the course journey.
- `---` separates Blocks that the Player can pace in Play mode.
- View mode supports normal reading; Play mode supports focused progression.
- Filename roles such as `.lesson.md`, `.lab.md`, and `.path.md` communicate
  teaching intent.
- Instructor notes, templates, and unlinked drafts remain outside learner
  navigation.
- Bun runs PathMX; students do not need Bun to visit a shared course.
- Obsidian Live Preview is an approachable Markdown editor; VS Code can become
  useful later when Git and project code matter.

Frame PathMX as a work-in-progress framework that can adapt to many teaching
models. Keep the LMS authoritative for grades, rosters, submissions, formal
policy, and protected records.

## Lead one authoring action

Ask whether the instructor wants to tour read-only, make one small course-home
edit, or prototype one unlinked activity. Recommend the course-home edit for a
first hands-on pass.

Ask before editing. For a prototype, use `prototype-course-material` and leave
new material under `paths/drafts/`. Show the instructor the resulting Source
and Player behavior. Do not link it into the learner Root without approval.

## Explain the safe repository and Share path

Explain that the current PathMX template command initializes from a public
template in the `pathmx` organization. The reusable Starter stays public and
contains no student or private term information. The instructor can then push
the initialized working course into a separate private repository.

Explain local preview separately from public Share. Before any Share, read
`operations/sharing.guide.md`, confirm explicit approval, protect the token,
and verify the resulting public page.

## Close or resume

End with:

- the verified Player URL and whether its process is still running;
- checks that passed or failed;
- the one edit or prototype made, if any;
- the next useful action; and
- the resume phrase: `Continue CSC-121 authoring from my current repository.`

Remind the instructor that Mark is available during the lab period for setup,
authoring, publishing, or adaptation support.
