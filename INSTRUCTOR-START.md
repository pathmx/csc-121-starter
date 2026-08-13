# Start here, instructor

The fastest path is to start an agent in this repository with one onboarding
request. With either agent installed and signed in, open the repository in a
terminal and use one of these commands:

```sh
codex "Onboard me as the CSC-121 instructor."
```

or:

```sh
claude "Onboard me as the CSC-121 instructor."
```

If you need an agent first, use the official
[Codex CLI setup](https://help.openai.com/en/articles/11096431) or
[Claude Code setup](https://docs.anthropic.com/en/docs/claude-code/getting-started).

The agent should inspect the repository without changing course content, check
the local tools, install the locked dependencies when needed, run the verified
course check, start PathMX Player, open the learner course website, explain what
is ready, and ask whether you want a tour or a specific-term setup. The tour
should make the course's staged tool model explicit: Thonny and manual practice
first; Codespaces, Git, and optional agent-supported projects later.

It will not publish the course, create GitHub repositories, change grades, or
write learner data without your explicit approval.

## Manual fallback

If an agent is unavailable, run:

```sh
bun install --frozen-lockfile
bun run onboard
bun run play:open
```

Then follow the
[semester setup checklist](./paths/author/semester-setup.guide.md). The course
home is `paths/index.path.md`.
