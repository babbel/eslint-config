# Changelog

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
