# CSC-121 Starter instructions

This repository is a small, evolvable PathMX course website. Help the
instructor understand and extend it without turning the Starter into a
prewritten semester or a large operational system.

## Instructor onboarding trigger

When an instructor says “start,” “onboard me,” “show me PathMX,” “run the
course,” or asks what to do first, use `onboard-csc-121-instructor`. Lead the
short authoring lab and keep the first session focused on:

1. what curriculum as code makes possible;
2. one Source and its Player page;
3. one small edit or prototype; and
4. local preview before public publishing.

Do not deploy, create remote repositories, restructure the course, or collect
private term information during the tour without explicit approval.

## Material prototyping trigger

When the instructor asks to draft, prototype, revise, connect, or review a
lecture, lesson, lab, assignment, assessment, module, or teaching week, use
`prototype-course-material`. New material belongs under `paths/drafts/` until
the instructor approves its learning shape and learner-facing placement.

## Before changing curriculum

1. Read `README.md`, `paths/author/course-brief.guide.md`, and the nearest
   relevant Source.
2. Use the installed `teach` skill for shared-learning decisions.
3. Use the installed `pathmx` skill for Markdown, graph, Player, publish, and
   Share work.
4. Inspect `git status --short` and preserve unrelated work.
5. Build the changed learner Root or named draft directly with `pathmx build`
   before handoff.

## Starter boundaries

- Keep `paths/index.path.md` as the single learner Root.
- Keep the default learner graph small enough to understand in one sitting.
- Preserve one complete example week; do not grow it into a full course unless
  the instructor asks.
- Keep drafts and instructor notes outside learner navigation.
- Write ordinary, portable Markdown before using specialized PathMX behavior.
- Treat the example Thonny workflow, policy language, and activity theme as
  editable examples rather than permanent course requirements.
- The LMS or another approved institutional system remains authoritative for
  enrollment, grades, accommodations, and private records.

## Publishing and privacy

- Local Player and a staged `pathmx publish` are safe review steps.
- Present Cloudflare static publishing as the supported durable course-site
  path. Treat GitHub Pages as a later custom deployment unless PathMX gains a
  first-class provider.
- `pathmx publish --deploy` and public Share are external mutations and need
  explicit instructor approval. Share is optional and should not be required
  during onboarding.
- The included GitHub workflow verifies the course but does not deploy it. If
  the instructor asks for automatic Cloudflare publishing, explain the
  proposed workflow, GitHub `production` environment, and required secret
  names before changing repository or cloud state.
- Never expose or print `PATHMX_SHARE_TOKEN`, `CLOUDFLARE_API_TOKEN`, or other
  deployment credentials.
- Never commit rosters, submissions, grades, learner identities, credentials,
  private feedback, or downloaded student repositories.
- Instructor agent use does not change student AI permissions.

## PathMX CLI safety

- Use the installed `pathmx` command for course operations. Do not introduce
  package scripts that merely wrap it.
- Bun is only the installation/runtime prerequisite for the current CLI
  distribution; this repository is not a Bun package project.
- Do not update the global PathMX installation as part of ordinary curriculum
  authoring.
- Do not hand-edit the official `learn`, `pathmx`, or `teach` skills; refresh
  them with `pathmx init --skills`.
- Preserve the repository-owned onboarding and prototyping skills during an
  official skill refresh.
- The canonical public template must not track
  `.agents/pathmx-skills.receipt.json`; initialized workspaces own that file.
