# CSC-121 PathMX Starter

This is a small, adaptable starting point for a CSC-121 course website. It is
not a finished semester and it does not prescribe one teaching style.

The Starter gives an instructor:

- one working PathMX course home;
- one complete example week with a lesson, lab, assignment, and self-check;
- an agent-guided introduction to curriculum as code;
- reusable workflows for prototyping new teaching material; and
- a simple local preview and public Share path.

Replace, rearrange, or remove the example content as your own course takes
shape.

## Start with the agent-guided lab

Open a terminal in this repository and run either:

```sh
codex "Onboard me and lead the short PathMX authoring lab."
claude "Onboard me and lead the short PathMX authoring lab."
```

The repository agent will check the workspace, start the PathMX Player, explain
the core ideas, show how one Markdown Source becomes part of the course site,
and offer one small edit or prototype. It will not publish or restructure the
course without asking.

See [Start here, instructor](./INSTRUCTOR-START.md) for the manual fallback.

## What PathMX contributes

PathMX treats curriculum as a collection of ordinary Markdown files:

- the files stay readable and portable outside PathMX;
- links between files create a navigable course graph;
- filename hints distinguish paths, lessons, labs, projects, and guides;
- the Player supports both free reading and a guided step-by-step Play mode;
- Git can record why curriculum changed; and
- repository-aware agents can inspect the same curriculum, prototype material,
  check alignment, and prepare a reviewable preview.

PathMX is still a work in progress. This Starter pins the version it has
actually verified, keeps the LMS as the authority for official records, and
avoids making experimental features necessary for the course to function.

## A note about Bun

[Bun](https://bun.sh/docs) is the small command-line runtime and package manager
used to install and run PathMX. In this repository:

- `bun install --frozen-lockfile` installs the verified PathMX version;
- `bun run play:open` opens the local course website;
- `bun run check` checks links, example files, and the built learner graph; and
- `bun run share:course` updates a public course snapshot when Share access is
  configured.

Students do not need Bun to visit a published course site.

## Choose any Markdown editor

PathMX Sources are plain `.md` files. Use a code editor, an ordinary text
editor, or a Markdown-focused tool. [Obsidian](https://obsidian.md/) is a good
option for instructors who prefer a more visual writing experience: open this
repository as a vault and use **Live Preview** to see formatted text while
editing. The local `.obsidian/` settings folder is ignored by Git.

Use PathMX Player for the final learner-facing preview because it shows the
actual navigation and Play experience that students receive.

## Prototype teaching material

The repository-owned `prototype-course-material` skill supports requests such
as:

> Prototype a 45-minute lesson that introduces `while` loops to students who
> already understand conditionals. Keep it in drafts and show me the Player
> route.

> Turn that lesson into a supported lab and an independent assignment. Show
> how each activity prepares students for the next one.

> Review this draft week for learning alignment, learner friction, and PathMX
> behavior. Do not publish it yet.

The agent drafts new material under `paths/drafts/` by default, outside the
published learner graph. The instructor reviews it before linking or sharing
it.

## Public template, private working course

The canonical Starter remains public because PathMX `0.3.0` only initializes
public GitHub Template repositories in the `pathmx` organization. The command
does not use local Git credentials to read a private template:

```sh
bunx @fellowhumans/pathmx init my-csc-121 \
  --template csc-121-starter
```

After initialization, the instructor can put `my-csc-121` in a new private
GitHub repository. The public Starter contains no student records, credentials,
private course links, or term-specific data.

GitHub's own **Use this template** flow can use a private template when the
instructor has read access, but that is separate from the current PathMX
template flag. Keeping the reusable Starter public and the working course
private gives the simplest PathMX onboarding path.

## Repository map

- `paths/index.path.md` — the intentionally small learner course home.
- `paths/example-week/` — one complete example to adapt or replace.
- `paths/author/` — the PathMX overview, authoring lab, and instructor notes.
- `paths/templates/week/` — lightweight patterns used by the authoring agent.
- `starter-files/example-week/` — two runnable Python starter files.
- `.agents/skills/` — official PathMX skills plus repository-owned onboarding
  and material-prototyping workflows.
- `operations/` — agent use, later project tools, and public sharing.

## Support and privacy

During the lab period, Haorui can contact Mark whenever setup, authoring, or
publishing feels unclear. PathMX is evolving, and questions or rough edges are
useful feedback rather than something the instructor needs to solve alone.

Never commit real rosters, learner profiles, submissions, grades, email
addresses, credentials, or private feedback to this public Starter. Put those
records only in institution-approved systems or a protected term workspace.

## License

The curriculum Sources, templates, documentation, and supporting code are
available under the [MIT License](./LICENSE).
