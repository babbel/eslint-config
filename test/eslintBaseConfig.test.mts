// External Imports
import { describe, expect, test } from 'bun:test';

// Internal Imports
import eslintBaseConfig from '../../lib/eslintBaseConfig.json';
import { lintFiles } from '../testUtils.mts';

// Begin Test Execution
describe(import.meta.file, () => {
  test("if the test files adhere to all the configuration file's rules, generate no errors", async () => {
    const lintResult = await lintFiles(['**/*.mjs'], eslintBaseConfig);
    for (const lintRecord of lintResult) {
      expect(lintRecord.messages).toStrictEqual([]);
    }
  });
});
