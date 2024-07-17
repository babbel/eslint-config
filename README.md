# NPM module `@babbel/eslint-config`

Hierarchical ESLint configuration collection that intends to be simple to use, layered, and shared with others. [(project maintainers)](./MAINTAINERS.md)

## Table of Contents

- [ESLint Configurations](#eslint-configurations)
- [Base Configuration Assumptions](#base-configuration-assumptions)
- [Example Usage](#example-usage)
  - [Browser Environment](#browser-environment)
  - [Node.js Environment](#nodejs-environment)
  - [Browser Environment That Uses React, TypeScript, Jest, and a Custom Rule](#browser-environment-that-uses-react-typescript-jest-and-a-custom-rule)
- [Making Your Own Config From the Base Config 🎓](#making-your-own-config-from-the-base-config-)
- [Final Thoughts](#final-thoughts)
- [Feedback Encouraged =D](#feedback-encouraged-d)

## ESLint Configurations

There are multiple configurations you can use in your projects listed below. These are meant to be used in combination with one another. Please note that the base configuration is used by all the others, so there's no need to include that in your configuration unless it's the only one you're using.

The configuration names specified below should be used as items in the `extends` array in your ESLint configuration file. Each configuration string is clickable to bring you to the configuration details.

**It is recommended to not use the `browser`, `isomorphic`, and/or `node` configs simultaneously**

- [`@babbel/eslint-config`](./lib/eslintBaseConfig.json): base configuration that all configurations inherit from
- [`@babbel/eslint-config/browser`](./lib/eslintBrowserConfig.json): for browser environments (**should always be last in your "extends" array**)
- [`@babbel/eslint-config/bun`](./lib/eslintBunConfig.json): for [Bun](https://bun.sh/) environments (**should always be last in your "extends" array**)
- [`@babbel/eslint-config/isomorphic`](./lib/eslintIsomorphicConfig.json): for isomorphic environments; in other words, using the browser and Node.js simultaneously on the same code (**should always be last in your "extends" array**)
- [`@babbel/eslint-config/jest`](./lib/eslintJestConfig.json): for testing environments using [Jest](https://jestjs.io/)
- [`@babbel/eslint-config/jsdoc`](./lib/eslintJsdocConfig.json): for documentation enforcement using [JSDoc](https://jsdoc.app/)
- [`@babbel/eslint-config/jsdoc-typescript`](./lib/eslintJsdocTypescriptConfig.json): for documentation enforcement using [JSDoc](https://jsdoc.app/) and [TypeScript](https://www.typescriptlang.org/)
- [`@babbel/eslint-config/node`](./lib/eslintNodeConfig.json): for [Node.js](https://nodejs.org/) environments (**should always be last in your "extends" array**)
- [`@babbel/eslint-config/playwright`](./lib/eslintPlaywrightConfig.json): for testing environments using the [Playwright](https://playwright.dev/) test runner (not `jest-playwright`)
- [`@babbel/eslint-config/preact`](./lib/eslintPreactConfig.json): for [Preact](https://preactjs.com/) environments
- [`@babbel/eslint-config/preact-typescript`](./lib/eslintPreactTypescriptConfig.json): for [Preact](https://preactjs.com/) environments using [TypeScript](https://www.typescriptlang.org/)
- [`@babbel/eslint-config/react`](./lib/eslintReactConfig.json): for [React](https://react.dev/) environments
- [`@babbel/eslint-config/react-typescript`](./lib/eslintReactTypescriptConfig.json): for [React](https://react.dev/) environments using [TypeScript](https://www.typescriptlang.org/)
- [`@babbel/eslint-config/typescript`](./lib/eslintTypescriptConfig.json): for [TypeScript](https://www.typescriptlang.org/) environments

## Base Configuration Assumptions

- Airbnb style guide configurations used as a guide
- Extends the `recommended` configuration of the following plugins:
  - `eslint-plugin-eslint-comments` ([documentation](https://mysticatea.github.io/eslint-plugin-eslint-comments/))
  - `eslint-plugin-import` ([documentation](https://github.com/import-js/eslint-plugin-import#readme))
  - `eslint-plugin-regexp` ([documentation](https://github.com/ota-meshi/eslint-plugin-regexp#readme))
  - `eslint-plugin-unicorn` ([documentation](https://github.com/sindresorhus/eslint-plugin-unicorn#readme))
- Native ES module-style imports and exports

  - Imports

    - File extensions required like in the spec (e.g. `import { some } from './thing.mjs';`)
    - Imports declared at the top of each file in ordered groups separated by an empty line

      1. External (e.g. NPM packages) and Node.js built-in (e.g. `node:fs`) imports
      2. Internal imports (e.g. from your `src/` directory)
      3. Type imports (e.g. `import type ...`)

      ```js
      // External Imports
      import { copyFile } from 'node:fs/promises';
      import React from 'react';

      // Internal Imports
      import { logger } from './logger.mjs';

      // Type Imports
      import type { APIGatewayProxyEvent, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
      import type { LoginResponse } from './types.mts';
      ```

  - Exports
    - Use named exports not default exports
    - Exports all in a single declaration at the bottom of each file (e.g. `export { ... }`)

- Prettier for file formatting; ESLint does not check for formatting

## Example Usage

Here are a few common use cases to get you familiar with using this collection. The following examples should be added to your `.eslintrc.json` file at the root of your repository.

### Browser Environment

```json
{ "extends": ["@babbel/eslint-config/browser"] }
```

Yep. That's it. 😀

Or if you want to add some custom rules:

```json
{
  "extends": ["@babbel/eslint-config/browser"],
  "rules": {
    /* add your custom rules here */
  }
}
```

### Node.js Environment

```json
{ "extends": ["@babbel/eslint-config/node"] }
```

I think you're getting the hang of it now...

### Browser Environment That Uses React, TypeScript, Jest, and a Custom Rule

```json
{
  "extends": ["@babbel/eslint-config/react-typescript", "@babbel/eslint-config/browser"],
  "rules": {
    "no-console": "off"
  },
  "overrides": [
    {
      "files": ["**/*.test.ts"],
      "extends": "@babbel/eslint-config/jest"
    }
  ]
}
```

## Making Your Own Config From the Base Config 🎓

```json
{
  "extends": ["@babbel/eslint-config"],
  "rules": {
    /* add all your custom rules here */
  }
}
```

The config export `@babbel/eslint-config` maps to the base config file `lib/eslintBaseConfig.json`. You can see how this works by looking for the `"."` entry in the `exports` section of this project's [`package.json`](./package.json); that section defines all the config exports rather than using proxy files (e.g. `index.js`) at the root of the repository.

For example, if you want to add an export called `@babbel/eslint-config/example`, you would do the following:

- Create a new ESLint configuration file called `./lib/eslintExampleConfig.json` and set your preferred settings within.
- For the `/example` package export to work, we have to add a new entry in the `"exports"` section in `package.json`. For this example, we'll add

```json
{
  "exports": {
    ...
    "example": "./lib/eslintExampleConfig.json",
    ...
  }
}
```

- File a pull request and wait for a project maintainer to review it. As a reminder, be sure that your new configuration extends `eslintBaseConfig.json` or a more specific configuration, otherwise the acceptance of your code contributions may be delayed.

## Making Changes to This Library

Maintenance of this library requires a specific version of [Bun](https://bun.sh/) to be installed. Because there are no well-established version managers for Bun (e.g. `nvm` for Node.js), a `package.json` script was added to overwrite the currently-installed version of Bun with the expected version for this project. Execute the install script by running

```bash
bun run --silent install:bun:expected-version
```
