---
type: guide
status: starter
---

# Previewing and publishing the course

Local preview, the durable course website, and a temporary review link are
three separate things.

## Local Player

```sh
pathmx play --open
```

This builds and serves the course on your computer. It is the right place to
review drafts and experiments. Stop it with `Ctrl-C` in the terminal that is
running the command.

## Recommended course website: Cloudflare

PathMX builds a static learner site. The current supported publishing path is
Cloudflare Workers Static Assets. It gives the course a durable public URL and
can later use a custom domain. Students only need a web browser.

This Starter already contains the following provider settings in
`paths/config/index.config.md`:

```yaml
publish:
  provider: cloudflare
  options:
    projectName: csc-121-course
```

Change `projectName` to a short name for the real course before the first
deployment. Then use the direct PathMX commands:

```sh
pathmx publish             # build and stage the site locally
pathmx publish --dry-run   # let Cloudflare validate the staged deployment
pathmx publish --deploy    # publish or update the public site
```

The first two commands are safe preparation. `--deploy` changes public
Cloudflare state, so the instructor should approve it explicitly. The first
deployment can use its `workers.dev` address; add a custom domain only after
that site has been reviewed.

Cloudflare may ask for a one-time browser login before validation or
deployment. Ask the repository agent to guide that setup if the account choice
or prompt is unclear.

This Starter checks the course after each push, but intentionally does not
deploy it automatically. When that becomes useful, ask the repository agent:

> Help me add a reviewed `main`-branch deployment to Cloudflare. Explain the
> GitHub workflow and secrets before changing anything.

The setup should use a GitHub `production` environment with
`CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` secrets. Never commit those
values.

GitHub Pages is also a static host, but PathMX does not currently provide a
first-class GitHub Pages publisher. Cloudflare is the simpler supported path
for this Starter. Revisit Pages only if the course needs it and the deployment
workflow has been tested end to end.

## Optional review link: PathMX Share

`pathmx share` creates a hosted, read-only snapshot. Treat its URL as public:
remove private institutional information, student data, unpublished answers,
and credentials before sharing. It is useful for a quick review or lab-period
prototype; it does not need to be the course website.

During the lab period, ask Mark for PathMX Share access and support. Put the
provided token in an ignored `.env` file:

```text
PATHMX_SHARE_TOKEN=your-token-here
```

Never commit or paste the token into a prompt. Then run:

```sh
pathmx share paths/index.path.md
```

Open the returned URL and verify the title, current example or course material,
and every link you plan to send. Sharing again updates the saved Share when the
local receipt is present under `.pathmx-state/`.

PathMX Share is a work-in-progress lab service, not the authoritative home for
the course, grades, rosters, submissions, or protected course records.

## Public Starter, private course

The current PathMX template flag downloads public templates from the `pathmx`
GitHub organization and does not authenticate with a private Git repository.
Keep this reusable Starter public, then create a separate private Git repository
for the actual course if it contains term-specific or non-public work.

GitHub's own **Use this template** feature can work with a private template when
the instructor has read access, but that is separate from
`pathmx init --template`.
