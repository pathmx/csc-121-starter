# Start here, instructor

The shortest useful introduction is an agent-guided authoring lab. From this
repository, run either:

```sh
codex "Onboard me and lead the short PathMX authoring lab."
```

or:

```sh
claude "Onboard me and lead the short PathMX authoring lab."
```

The agent should:

1. explain what Bun and PathMX do in plain language;
2. install the locked dependencies if needed;
3. run the repository check;
4. open and verify the learner course in PathMX Player;
5. connect one Markdown Source to what you see in the Player;
6. introduce Sources, links, Blocks, Beats, View mode, and Play mode;
7. offer one small edit or one prototype request; and
8. explain preview and Share without publishing unless you approve it.

It should not ask you to configure a semester, GitHub organization, LMS,
grading system, or student repository before you have seen the basic authoring
loop.

## Manual fallback

[Install Bun](https://bun.sh/docs/installation), then run:

```sh
bun install --frozen-lockfile
bun run onboard
bun run play:open
```

Open `paths/index.path.md` in any text or Markdown editor while the Player is
running. Change one sentence, save it, and reload or wait for the Player to
update. Then read the
[PathMX overview](./paths/author/pathmx-overview.guide.md) and
[authoring lab](./paths/author/authoring-lab.path.md).

Obsidian users can open the repository folder as a vault and use Live Preview.
Keep the PathMX Player beside it to review the actual student experience.

During the lab period, contact Mark whenever setup or publishing becomes a
barrier. PathMX is still evolving and this Starter is meant to change with your
teaching preferences.
