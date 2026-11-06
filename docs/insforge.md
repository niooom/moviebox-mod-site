# InsForge backend (this project)

InsForge is the backend platform used for this project: Postgres + auth, storage, edge
functions, realtime, model gateway, hosting. Everything is driven through the CLI
(`@insforge/cli`, always via `npx`, never installed globally).

- Docs: https://docs.insforge.dev · Agent doc: https://insforge.dev/skill.md
- CLI: https://www.npmjs.com/package/@insforge/cli · Skills: https://github.com/InsForge/insforge-skills

## Project

| field | value |
| --- | --- |
| project id | `53e5e281-bdcd-405c-9c67-1eed88053068` |

## Credentials — правила (read this first)

InsForge API keys (`uak_...`) are **full-access admin keys**, equivalent to a service-role key.

1. Store the key **only** as the GitHub Actions secret `INSFORGE_ACCESS_TOKEN`
   (Settings → Secrets and variables → Actions). Never commit it.
2. Never put it in front-end code, `VITE_*` variables, `NEXT_PUBLIC_*`, or anything that
   ships to a browser or lands in a public repository's files.
3. Browser/client code talks to InsForge through a public anon key + the SDK
   (`npm install @insforge/sdk`) with row-level security in place — never the admin key.
4. If a key is ever pasted into a chat, ticket or log, rotate it (dashboard → Profile →
   API Keys → revoke, create a new one).

## Headless usage (what CI does)

The CLI accepts the key per invocation, so no interactive login is needed:

```bash
export INSFORGE_ACCESS_TOKEN=uak_...        # from the secret, never hard-coded
npx --yes @insforge/cli@latest whoami --json
npx --yes @insforge/cli@latest link --project-id 53e5e281-bdcd-405c-9c67-1eed88053068 --json
npx --yes @insforge/cli@latest metadata --json
```

`link` writes `.insforge/project.json` for the current directory; `link` also installs the
official agent skills, which is what teaches an agent the `db`, `storage`, `functions` and
`deployments` commands.

## Running it from this repository

`.github/workflows/insforge.yml` (manual, `workflow_dispatch`) does the above on a runner.
Pick a task: `whoami`, `metadata`, `tables`, `storage-buckets`, `functions-list`, or paste SQL
in the `query` field.

First run needs the secret to exist; the workflow fails with a clear message if it is missing.

## Local (your own machine, optional)

```bash
npx @insforge/cli login --user-api-key uak_...        # once
npx @insforge/cli link --project-id 53e5e281-bdcd-405c-9c67-1eed88053068
npx @insforge/cli whoami
```

## Notes for agents working in this repo

- Fetch https://insforge.dev/skill.md before doing InsForge work (canonical workflow).
- Prefer `--json` output; it is stable and parseable.
- Keep the admin key server-side; anything in the static site must use the anon key.
