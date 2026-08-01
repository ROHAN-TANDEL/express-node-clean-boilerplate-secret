# Source layout

`server.ts` starts the process. `bootstrap/` composes the app, configuration, and logger; `app.ts` mounts feature modules; `lifecycle/` handles graceful termination. Feature code lives in `modules/`; cross-cutting code is organized into the remaining folders.

Every TypeScript code line in this tree is preceded by a documentation comment with these fields:

- `use-cases`: the line's responsibility.
- `why`: the reason it is needed.
- `without`: the consequence of omitting it.
- `rules`: why the chosen form is appropriate.
