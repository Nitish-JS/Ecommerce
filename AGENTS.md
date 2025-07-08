# Repo Guidelines

## Code style
- Use two spaces for indentation.
- Always end JavaScript statements with semicolons.
- Prefer double quotes for strings.

## Testing
- After making changes, run `npm test --silent` inside both the `client` and `admin` directories.
- These tests require Node.js 16 or later. If you use Node.js 17 or newer, set `NODE_OPTIONS=--openssl-legacy-provider`.
- There are currently no tests for the `server` directory.

## Commits and PRs
- Write short imperative commit messages, for example `add search bar`.
- Pull request descriptions should have **Summary** and **Testing** sections outlining the change and test results.
