# PathMX setup and deployment

## Local authoring

Install Bun, clone the private term repository, and run:

```sh
bun install --frozen-lockfile
bun run check
bun run play:open
```

The project pins `@fellowhumans/pathmx` `0.3.0`. Use the repository command,
not an unrelated global version, for builds and publishing.

Important locations:

- `paths/config/index.config.md` — configuration and the single course Root;
- `paths/index.path.md` — learner home;
- `paths/author/` — instructor-only guidance outside learner navigation;
- `.pathmx*` — generated, ignored output that must not be committed.

## Ordinary change loop

1. Edit ordinary Markdown.
2. Check relative links and run `bun run check`.
3. Run `bun run play` or `bun run play:open`.
4. Open the exact changed Source and exercise any code or interaction.
5. Commit only the intended Source and supporting files.

## Update PathMX

Treat a PathMX update as a small verified transaction:

1. begin from a clean, working commit;
2. run `bun add --exact @fellowhumans/pathmx@latest`;
3. run `bun run check` and inspect Weeks 1 and 2 in Player;
4. update `pathmxCompatibility.baseline` only after the checks pass;
5. commit `package.json` and `bun.lock` together.

If the candidate fails, restore only those version files from the known commit
and report the incompatibility. Do not rewrite course data to hide it.

## Cloudflare publishing

The config selects Cloudflare Workers Static Assets with a placeholder Worker
name, `csc-121-course`. Change it in the private term repository if another
course already owns that Worker.

First stage locally without changing remote state:

```sh
bun run publish:stage
bun run publish:dry-run
```

`publish:dry-run` may require the provider tooling and current network access,
but should not deploy.

## GitHub secrets

Create a protected GitHub environment named `production`. Add:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

Create the token from Cloudflare's Workers edit template and restrict it to the
correct account. Never put either value in Git, PathMX config, a learner Source,
or an agent prompt.

## Deploy

The included `pathmx-deploy.yml` is manual. In GitHub Actions:

1. run **Deploy PathMX**;
2. approve the `production` environment if protection requires it;
3. wait for the clean check and deployment to finish;
4. open the resulting `workers.dev` URL;
5. confirm the title and at least one Week 1 route;
6. only then share the URL through the LMS.

Do not add a custom domain until the `workers.dev` deployment is verified and
the domain cutover is explicitly approved.

## Recovery

- A failed deploy does not change authored Markdown.
- Fix the failure in a normal commit, run the local check, and rerun the manual
  workflow.
- If a deployment is wrong, redeploy the last known good Git commit rather
  than hand-editing generated output.
- Never use the live `.pathmx` directory for diagnostic experiments.
