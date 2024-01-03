// External Imports
import { ESLint } from 'eslint';

// Local Functions
function createESLintInstance(baseConfig: object) {
  return new ESLint({ baseConfig, useEslintrc: false });
}

function outputLintingResults(results) {
  // Identify the number of problems found
  const problems = results.reduce(
    (acc, result) => acc + result.errorCount + result.warningCount,
    0,
  );

  if (problems > 0) {
    console.log('Linting errors found!');
    console.log(results);
  } else {
    console.log('No linting errors found.');
  }
  return results;
}

async function lintFiles(filePaths: string[], eslintConfiguration: object) {
  const eslint = createESLintInstance(eslintConfiguration);
  return eslint.lintFiles(filePaths);
  // return outputLintingResults(results);
}

// Module Exports
export { lintFiles };
