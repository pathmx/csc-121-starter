---
type: guide
status: starter
---

# PathMX in brief

PathMX is a work-in-progress, Markdown-first framework for making guided course
websites. It is designed to keep teaching material easy to read and edit as
ordinary files while giving learners a focused Player for reading freely or
moving through material one step at a time.

The framework is intentionally adaptable. This Starter demonstrates one small
CSC-121 use case; it is not a required course model or finished teaching
platform.

---

## Why keep curriculum as code?

The phrase means that lessons, labs, assignments, links, and configuration live
as plain files in a repository. That makes it possible to:

- revise material with familiar editors;
- see exactly what changed and recover earlier versions with Git;
- reuse and connect small teaching materials instead of maintaining one large
  document;
- preview the same material in a learner-facing website; and
- ask an agent to help draft, review, or reorganize work while the instructor
  remains the author and final reviewer.

You can adopt those benefits gradually. A useful first session needs only an
editor, Bun, a few Markdown files, and the local Player. Git, remote publishing,
and agent-assisted authoring can follow when they are useful.

---

## The small vocabulary

**Source** is the basic authored file. Most Sources are ordinary Markdown with
a short header at the top.

**Filename roles** communicate intent. A `.lesson.md` file is a lesson,
`.lab.md` is a lab, `.project.md` is an assignment or project, `.guide.md` is a
reference, and `.path.md` connects material into a journey.

**Links make the course graph.** A course home links to a week; the week links
to its lesson, lab, assignment, and check. Unlinked drafts can stay out of the
learner journey until they are ready.

**Blocks** are sections separated by `---`. In Play mode, the Player can reveal
these sections in sequence. Shorter presentation steps called Beats are
available when an activity needs finer pacing, but a first course does not need
them.

**Root** is the entry Source for a learner experience. This Starter has one
learner Root: `paths/index.path.md`.

---

## The Player

The Player turns linked Sources into the course website. View mode works like a
normal page. Play mode creates a paced sequence that helps a learner focus on
the current section while keeping the wider journey visible.

The Player is for guided learning, not a replacement for every course system.
An LMS can remain the official home for grades, rosters, submissions, and
institutional policy while PathMX presents the curriculum.

---

## The few tools involved

**Markdown editor:** any text editor works. Obsidian is a friendly option
because its Live Preview shows formatted headings, links, lists, and emphasis
while you edit the underlying Markdown. VS Code is useful when you later want
Git and code in the same workspace.

**Bun:** Bun is the runtime and package manager used to install and run PathMX.
It fills a role similar to Node.js plus npm. In this repository,
`bun install` installs the pinned PathMX version and `bun run play:open` starts
the local course website. Students do not need Bun merely to read a published
course or write early Python in Thonny.

**Git:** Git records versions of the files and helps move the course between
computers or collaborators. It is valuable, but it does not have to be part of
the first authoring lab.

**Agent:** Codex or Claude Code can read the repository guidance, explain the
structure, draft a small Source, run checks, and open the Player. It should not
publish, handle student data, or make instructional decisions without the
instructor's review.

If you get stuck during this lab period, reach out to Mark. PathMX is still
evolving, and questions or rough edges are useful feedback.
