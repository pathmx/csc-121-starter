---
type: guide
status: starter
---

# Previewing and sharing the course

Local preview and public sharing are separate decisions.

## Local Player

```sh
pathmx play --open
```

This builds and serves the course on your computer. It is the right place to
review drafts and experiments. Stop it with `Ctrl-C` in the terminal that is
running the command.

## Public Share

`pathmx share` creates a hosted, read-only snapshot. Treat its URL as public:
remove private institutional information, student data, unpublished answers,
and credentials before sharing.

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
grades, rosters, submissions, or protected course records.

## Public Starter, private course

The current PathMX template flag downloads public templates from the `pathmx`
GitHub organization and does not authenticate with a private Git repository.
Keep this reusable Starter public, then create a separate private Git repository
for the actual course if it contains term-specific or non-public work.

GitHub's own **Use this template** feature can work with a private template when
the instructor has read access, but that is separate from
`pathmx init --template`.
