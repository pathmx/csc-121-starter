---
type: guide
status: starter
---

# Try the CSC-121 PathMX Starter

This is a short, instructor-facing introduction to using PathMX as a course
website and authoring workspace. It starts with one example week so you can
adapt it to your own teaching rather than inherit a finished semester.

PathMX is a work in progress. The useful idea is simple: keep guided curriculum
as readable Markdown files, connect those files into a learner journey, review
them in the Player, and use an agent when it helps you prototype or check the
work.

---

## What you will try

In about 20 minutes you can:

1. open the example course in the PathMX Player;
2. connect one Markdown Source to what appears in the course website;
3. change one sentence and see the result;
4. ask Codex or Claude Code to prototype a small unlinked lab; and
5. decide whether the workflow fits any part of your course.

Students do not need PathMX, Bun, Git, or an agent for the opening Python
experience. They can begin in Thonny while you use PathMX to publish guided
material. Git, VS Code, and Codespaces can arrive later for project-based work.

---

## Get the Starter

Install [Bun](https://bun.sh/docs/installation), then run:

```sh
bunx @fellowhumans/pathmx init csc-121 --template csc-121-starter
cd csc-121
bun install --frozen-lockfile
```

The current PathMX template command supports public template repositories in
the `pathmx` GitHub organization. The recommended privacy boundary is:

1. keep the reusable Starter public and free of student or institution-private
   information;
2. initialize a local copy from it; and
3. push the actual course to a new private repository that you control.

Being invited to a private GitHub template is not enough for the current
`pathmx init --template` implementation because it does not use your local Git
credentials for template download.

[GitHub's own template flow](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
can use a private template when you have read access. That is a separate option
from the PathMX command. The public Starter plus a private working course is the
simplest PathMX setup today.

---

## Let the repository guide you

From the new repository, start Codex or Claude Code and say:

> Onboard me and lead the short PathMX authoring lab.

The agent will verify the pinned tools, run the Player, explain the small
vocabulary, and guide one local prototype. It will ask before connecting a
draft or publishing a public link.

You can edit the Markdown with any text editor. [Obsidian](https://obsidian.md/)
is a friendly option: its Live Preview gives a more visual, formatted editing
experience while preserving the plain Markdown files PathMX uses.

---

## Core commands

```sh
bun run onboard     # verify this Starter
bun run play:open   # open the local course website
bun run check       # check links, examples, and the learner graph
```

Bun is the runtime and package manager used by the repository, similar to
using Node.js and npm together. Students do not need Bun to read the site.

---

## Support

This Starter and PathMX are intentionally evolving during the lab period. If
anything is unclear or gets in the way, reach out to Mark. He can help with
installation, authoring, Player behavior, publishing, or adapting the workflow
to the course you actually want to teach.
