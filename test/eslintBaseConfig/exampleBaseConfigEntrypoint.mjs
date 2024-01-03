// External Imports
import { Blob, Buffer } from 'node:buffer'; // Rule: unicorn/prefer-node-protocol
import { readFile } from 'node:fs/promises';

// Internal Imports
import { a, b } from './exampleBaseConfigImport.mjs';

// Local Variables
const anError = new Error('an error'); // Rule: unicorn/error-message
const buffer = Buffer.from('7468697320697320612074c3a97374', 'hex'); // Rule: unicorn/no-new-buffer
const escapeSequence = '\uD834'; // Rules: unicorn/escape-case, unicorn/no-hex-escape
// eslint-disable-next-line no-undef -- EventTarget available when any environment is chosen
const eventTarget = new EventTarget(); // Rule: unicorn/prefer-event-target
const fortyTwo = Math.trunc(Number.parseFloat('42.98')); // Rules: unicorn/prefer-math-trunc, unicorn/prefer-number-properties
const isNode = globalThis.process !== undefined; // Rule: unicorn/no-typeof-undefined
const now = new Date(); // Rule: unicorn/new-for-builtins
const nowInMilliseconds = Date.now(); // Rule: unicorn/prefer-date-now
const oneThousand = 1_000; // Rule: unicorn/numeric-separators-style
const objectWithSortedKeys = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
};

// Local Functions
function add(term1 = a, term2 = b) {
  return term1 + term2;
}

// Rule: regexp/no-missing-g-flag
function checkRegexRuleNoMissingGFlag() {
  return 'table football, foosball'.matchAll(/foo/g);
}

// Rules: regexp/no-useless-dollar-replacements, unicorn/prefer-default-parameters
function checkRegexRuleNoUselessDollarReplacements(message = 'One Two') {
  return message.replace(/(\w+)\s(\w+)/, '$2, $1');
}

// Rule: unicorn/no-array-callback-reference
function checkUnicornRuleNoArrayCallbackReference() {
  return [1, 2, 3].map((item) => item);
}

// Rule: unicorn/prefer-array-find
function checkUnicornRulePreferArrayFind() {
  return [1, 2, 3].find((value) => value === 2);
}

// Rule: unicorn/explicit-length-check
function checkUnicornRuleExplicitLengthCheck() {
  const numbers = checkUnicornRuleNoArrayCallbackReference();
  return Array.isArray(numbers) && numbers.length > 0; // Rule: unicorn/no-instanceof-array
}

// Rule: unicorn/prefer-array-flat
function checkUnicornRulePreferArrayFlat() {
  return [1, 2, 3, [4, 5]].flat();
}

// Rule: unicorn/prefer-array-flat-map
function checkUnicornRulePreferArrayFlatMap() {
  return [1, 2, 1].flatMap((item) => (item === 2 ? [item, item] : item));
}

// Rules: unicorn/prefer-at, unicorn/prefer-negative-index
function checkUnicornRulePreferAt() {
  const list = [1, 2, 3, 4, 5];
  return list.at(-1);
}

// Rule: unicorn/prefer-includes
function checkUnicornRulePreferIncludes() {
  return 'John Smith'.includes('Jo');
}

// Rule: unicorn/prefer-blob-reading-methods
async function checkUnicornRulePreferBlobReadingMethods() {
  const container = { hello: 'world' };
  const blob = new Blob([JSON.stringify(container, undefined, 2)], {
    type: 'application/json',
  });
  const text = await blob.text();
  return text;
}

// Rule: unicorn/prefer-object-from-entries
function checkUnicornRulePreferObjectFromEntries() {
  const pairs = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
  ];
  return Object.fromEntries(pairs);
}

// Rules: unicorn/prefer-optional-catch-binding, unicorn/text-encoding-identifier-case
async function checkUnicornRulePreferOptionalCatchBinding() {
  try {
    const fileContents = await readFile('./.eslintrc.json', 'utf8');
    return fileContents;
  } catch {
    return 'ERROR';
  }
}

// Rule: unicorn/prefer-reflect-apply
function checkUnicornRulePreferReflectApply() {
  return Reflect.apply(add, undefined, [3, 4]);
}

// Rule: unicorn/prefer-regexp-test
function checkUnicornRulePreferRegexpTest() {
  return /\w/.test('hello world');
}

// Rules: unicorn/prefer-set-has, unicorn/prefer-set-size
function checkUnicornRulePreferSetHas() {
  const set = new Set([1, 2, 3]);
  return set.size === 3 && set.has(1) && set.has(2) && set.has(3);
}

// Rule: unicorn/prefer-spread
function checkUnicornRulePreferSpread() {
  const set = new Set([1, 2, 3]);
  return Array.isArray([...set]);
}

// Rule: unicorn/prefer-string-starts-ends-with
function checkUnicornRulePreferStringStartsEndsWith() {
  return 'Hello World'.endsWith('World');
}

// Rule: unicorn/prefer-string-trim-start-end
function checkUnicornRulePreferStringTrimStartEnd() {
  return '  Hello World'.trimStart();
}

// Rules: unicorn/prefer-switch, unicorn/switch-case-braces
function checkUnicornRulePreferSwitch(number) {
  switch (number) {
    case 1:
      return 'one';
    case 2: {
      const label = 'two';
      return label;
    }
    case 3:
      return 'three';
    default:
      return 'unqualified';
  }
}

// Rule: unicorn/prefer-ternary
function checkUnicornRulePreferTernary(path) {
  return path.endsWith('.js') ? 200 : 404;
}

// Rules: unicorn/prefer-type-error, unicorn/throw-new-error
function checkUnicornRulePreferTypeError(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('Array expected');
  }
  return list.length;
}

// Rule: unicorn/require-array-join-separator
function checkUnicornRuleRequireArrayJoinSeparator() {
  return [1, 2, 3, 4, 5].join(',');
}

async function printEslintConfig() {
  try {
    const fileContents = await readFile('./.eslintrc.json', 'utf8');

    // eslint-disable-next-line no-console, no-undef -- example of a required eslint-disable comment
    console.log('FILE CONTENTS', fileContents);
    return fileContents;
  } catch (error) {
    // Rules: unicorn/catch-error-name, unicorn/consistent-destructuring
    const { message } = error;
    return checkRegexRuleNoUselessDollarReplacements(message);
  }
}

// Module Exports
export {
  add,
  anError,
  buffer,
  checkRegexRuleNoMissingGFlag,
  checkUnicornRulePreferObjectFromEntries,
  checkUnicornRuleRequireArrayJoinSeparator,
  checkUnicornRulePreferStringStartsEndsWith,
  checkUnicornRulePreferTypeError,
  checkRegexRuleNoUselessDollarReplacements,
  checkUnicornRulePreferOptionalCatchBinding,
  checkUnicornRulePreferSetHas,
  checkUnicornRulePreferSpread,
  checkUnicornRuleExplicitLengthCheck,
  checkUnicornRulePreferTernary,
  checkUnicornRulePreferStringTrimStartEnd,
  checkUnicornRulePreferRegexpTest,
  checkUnicornRulePreferSwitch,
  checkUnicornRulePreferArrayFind,
  checkUnicornRulePreferArrayFlat,
  checkUnicornRulePreferReflectApply,
  checkUnicornRulePreferArrayFlatMap,
  checkUnicornRulePreferAt,
  checkUnicornRulePreferBlobReadingMethods,
  checkUnicornRulePreferIncludes,
  escapeSequence,
  eventTarget,
  fortyTwo,
  isNode,
  now,
  nowInMilliseconds,
  objectWithSortedKeys,
  oneThousand,
  printEslintConfig,
};
