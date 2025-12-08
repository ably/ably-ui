# Agent Development Guide

This file is not necessarily for people, the intended audience is automated agents.

## Other references

Consider the content of `README.md` as well, it contains technical information
used by contributors to this project, as well as consumers of this project

## Consumers

This project is intended to primarily be consumed by the Ably website, voltaire
& docs projects. It is distributed via NPM as the `@ably/ui` package.

## Build & Test Commands

- `pnpm build` - Build the library (prebuild, icons, swc, tsc, cleanup)
- `pnpm test` - Run all tests with Vitest
- `pnpm test -- src/core/insights/index.test.ts` - Run a single test file
- `pnpm lint` - Run ESLint on all files
- `pnpm format:check` - Check formatting with Prettier
- `pnpm format:write` - Auto-format all files with Prettier
- `pnpm storybook` - Start Storybook dev server on port 6006
- `pnpm start` - Start Vite dev server on port 5000

## Code Style

- **Language**: TypeScript with strict mode enabled
- **React**: Use functional components with hooks; React 18.x
- **Imports**: Default export for main component, named exports for types/utils
- **Naming**: PascalCase for components/types, camelCase for functions/variables,
  kebab-case for files
- **Types**: Define prop types as `ComponentNameProps`, use `PropsWithChildren<T>`
  when needed
- **Styling**: Tailwind 3.4.
- **Utility**: Use `cn()` from `./src/core/utils/cn` for className merging (clsx
  & tailwind-merge)
- **Formatting**: Prettier defaults (no config = defaults), 2-space indent
- **Error Handling**: Wrap external service calls in try-catch, log with logger module
- **Comments**: JSDoc for props, inline comments for complex logic

Keep emojis in the code to a minimum, only introduce them if there is precedent
in the file you're working on.

Comments and commit messages should not include statements like "local tests pass",
this is a given for how we work.

## Development

- Run `pnpm lint` & `pnpm format:write` on files after making changes, we lint
  files in CI and don't want preventable failures. `pnpm lint:fix` should also
  apply our formatting rules while trying to fix most things for you
- Run tests with `pnpm test` after making file changes

## Git workflow

- Always do work on a new branch, start the branch on the HEAD of `origin/main`
- Before pushing the branch run the tests and linters to ensure they are happy
- When updating a branch, rebase on `origin/main` and force-push (with lease)
- Use our PR template in the `.github` folder as a reference for the pull request
- Keep commit messages concise
