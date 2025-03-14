# Changelog

## 2.3.0

- Exclude functions from rule `@typescript-eslint/no-use-before-define`
- Upgrade dependencies to latest versions

## 2.2.1

- Updated publish workflow's way of retrieving secrets

## 2.2.0

- Add `eslint-plugin-react-compiler` to all React- and Preact-based configs
- Set explicit support for Node.js LTS versions 20 and 22
- Upgrade dependencies to latest versions

## 2.1.1

- Improve TypeScript type-aware linting compatibility by passing `true` to `project` instead of a relative path. This should [auto-find the `tsconfig.json` file nearest the source file being linted](https://typescript-eslint.io/packages/parser/#project).

## 2.1.0

- Add [`eslint-plugin-perfectionist`](https://github.com/azat-io/eslint-plugin-perfectionist) to the base configuration and all its dependent configurations
  - Provides more robust and consistent alphabetical sorting features than what ESLint provides by default
  - All rules are auto-fixable
  - Its rules replace rules `import/order`, `sort-keys`, and `sort-vars`
- Add [`eslint-plugin-react-perf`](https://github.com/cvazac/eslint-plugin-react-perf) to the `/react` configuration and all its dependent configurations
  - Provides performance-related checks to prevent code that causes performance problems
- Upgrade dependencies to latest versions
- Upgrade Bun version from `1.1.17` to `1.1.27`

## 2.0.3

- Upgrade dependencies to latest versions

## 2.0.2

- Fix `/bun` config profile so it no longer checks for Node.js version to enforce feature support. Because Node.js is based on v8 and Bun on JSC, the two runtimes will likely forever be out of sync, so best to rely on TypeScript types for feature support rather than version chasing.
- Upgrade dependencies to latest versions

## 2.0.1

- Fix `/bun` config profile so it emulates Node.js `^21.0.0` versions, otherwise linting for feature support will fail for modern APIs common in Bun apps like `Request`, `Response`, and `Headers`
- Upgrade dependencies to latest versions

## 2.0.0

- **Breaking Changes**
  - Node.js `18.18.0` is now the minimum supported runtime version because of dependency requirements
  - ESLint version `8.56.0` is now the minimum supported version
    - Version `9.x` cannot be supported yet due to a dependency on the `eslint-config-airbnb*` packages and its strict peer dependency requirement of no higher than ESLint `8.x`
- 3 new configurations added
  - `/bun` for Bun support
  - `/jsdoc` for JSDoc support in JavaScript projects
  - `/jsdoc-typescript` for JSDoc support in TypeScript projects
- [Bun](https://bun.sh/) replaces NPM as a script runner and package manager for maintenance of this package
- When grouping module imports, [subpath imports](https://nodejs.org/api/packages.html#subpath-imports) are now treated as part of the 2nd or `Internal Imports` module imports grouping
- Upgrade dependencies to latest versions

## 1.2.2

- Upgrade dependencies to latest versions

## 1.2.1

- Change the base config's `import/order` rule so the `unknown` import type now fills the last import group slot

## 1.2.0

- Testing added using example code for each configuration to verify correctness during continuous integration
- React and Preact TypeScript configs now allow JSX in files with `.tsx` file extensions
- Remove dev dependency `npm-run-all` because it was only used during the `reinstall` NPM script and would cause an error if dependencies weren't installed prior to execution

## 1.1.0

- Minimum `peerDependencies` ESLint version raised to `8.4.4` to remain compatible with `eslint-plugin-regexp` [version 2.0](https://github.com/ota-meshi/eslint-plugin-regexp/pull/558)+ and the regular expression `v` flag
- Upgrade dependencies to latest versions

## 1.0.1

- For the `/node` config, disable all `eslint-plugin-n` rules related to `import` and `require` that have too many false positives:
  - `n/no-extraneous-import`
  - `n/no-extraneous-require`
  - `n/no-missing-import`
  - `n/no-missing-require`
  - `n/no-unpublished-import`
  - `n/no-unpublished-require`

## 1.0.0

- First public release
