---
name: insforge-cli
description: >-
  Use this skill whenever someone needs a backend, or a task touches InsForge backend or cloud
  infrastructure through the InsForge CLI. Vendored copy — source is the official repository
  https://github.com/InsForge/insforge-skills (Apache-2.0). Read it before doing InsForge work
  in this project.
license: Apache-2.0
source: https://github.com/InsForge/insforge-skills/blob/main/skills/insforge-cli/SKILL.md
---

# InsForge CLI (project copy)

Canonical agent document: https://insforge.dev/skill.md · Docs: https://docs.insforge.dev

This file is a trimmed, project-specific copy. The full skill (with `references/*`) is installed
automatically when the directory is linked, e.g. `npx -y @insforge/cli link --project-id <id> -y`.

## Core rules

- Always run the CLI through `npx -y @insforge/cli <command>`. Keep npx's `-y` — without it npx
  asks "Ok to proceed?" and blocks forever in a non-interactive shell. Never install a global
  `insforge` binary.
- If a project is already linked, use it. Run login / create / link / list only when connection
  setup is actually needed.
- **InsForge API keys are full-access admin keys** (equivalent to a service-role key). Keep them
  server-only: no front-end code, no `VITE_*`, `NEXT_PUBLIC_*`, `PUBLIC_*`, `REACT_APP_*`.
- Prefer CLI commands over raw HTTP calls.
- Use `--json` for structured output, `-y` to auto-accept Y/N confirmations.
- Never commit `.insforge/project.json` — it contains the project API key.

## Connection (this project)

```bash
npx -y @insforge/cli login --user-api-key "$INSFORGE_USER_API_KEY"   # once, local
npx -y @insforge/cli link --project-id 53e5e281-bdcd-405c-9c67-1eed88053068 -y
npx -y @insforge/cli current
npx -y @insforge/cli whoami
```

Headless / CI: pass the key per invocation instead of logging in.

```bash
INSFORGE_ACCESS_TOKEN=$SECRET npx -y @insforge/cli whoami --json
```

Environment overrides: `INSFORGE_ACCESS_TOKEN`, `INSFORGE_PROJECT_ID`, `INSFORGE_EMAIL`,
`INSFORGE_PASSWORD`.

Exit codes: `0` ok · `1` general/HTTP · `2` not authenticated · `3` project not linked ·
`4` not found · `5` permission denied.

## Commands used most in this project

| Need | Command |
| --- | --- |
| current / who am I | `current`, `whoami` |
| project inventory | `metadata --json` |
| schema + SQL | `db tables`, `db query "<sql>"`, `db migrations new <name>` then `db migrations up --all` |
| storage | `storage buckets`, `storage create-bucket <name> [--private]`, `storage upload`, `storage list-objects` |
| edge functions | `functions list`, `functions code <slug>`, `functions deploy <slug> --file <path>`, `functions invoke <slug>` |
| secrets | `secrets list`, `secrets add <key> <value>`, `secrets rotate <api-key\|anon-key>` |
| deploys | `deployments deploy <dir>` (front-end source dir), `compute ...` for containers |
| diagnostics | `diagnose`, `diagnose advisor`, `logs <source> --limit <n>` |
| agent memory | `memory list`, `memory recall "<query>"`, `memory remember "<content>" --kind decision` |
| built-in docs | `docs`, `docs instructions`, `docs db typescript` |

## Database defaults

- Put app-owned objects in the `public` schema; do not write to InsForge-managed schemas
  (`auth`, `storage`, `realtime`, `payments`, `system`, ...).
- Prefer a migration (`db migrations new` + SQL file, then `db migrations up --all`) over ad-hoc SQL.
- Add both SQL privileges **and** RLS policies (policies do not replace `GRANT`); include
  `WITH CHECK` on INSERT/UPDATE policies; use `auth.uid()` for ownership; make RLS helper
  functions `SECURITY DEFINER` and schema-qualified when they touch RLS-enabled tables.

## AI gateway

- `ai setup` writes `OPENROUTER_API_KEY` server-side; `ai overview` shows spend/limits.
- Keep that key server-only.

## Feedback

If an InsForge-side bug, doc discrepancy or missing capability blocks the work, report it with
`npx -y @insforge/cli feedback --json ...` and continue with a workaround. Never report problems
in the user's own app code.
