// Local Variables
const a = 1;
const b = 2;
const regularExpressions = {
  noDupeDisjunctions: /a|b/, // Rule: regexp/no-dupe-disjunctions
  noEmptyAlternative: /a+|b*/, // Rule: regexp/no-empty-alternative
  noEmptyCapturingGroup: /(a)/, // Rule: regexp/no-empty-capturing-group
  noEmptyCharacterClass: /abc[a-z]/, // Rule: regexp/no-empty-character-class
  noEmptyGroup: /(a)/, // Rule: regexp/no-empty-group
  noEmptyLookaroundsAssertion: /(?<!y)x/, // Rule: regexp/no-empty-lookarounds-assertion
  noEscapeBackspace: /\cH/, // Rule: regexp/no-escape-backspace
  // eslint-disable-next-line prefer-regex-literals -- example of using RegExp constructor correctly
  noInvalidRegexp: new RegExp('foo'), // Rule: regexp/no-invalid-regexp
  noLazyEnds: /a??(?:ba+?|c)*/, // Rule: regexp/no-lazy-ends
  noMisleadingCapturingGroup: /a+(b*)/, // Rule: regexp/no-misleading-capturing-group
  noMisleadingUnicodeCharacter: /👍+/u, // Rule: regexp/no-misleading-unicode-character
  noMissingGFlag: /foo/g, // Rule: regexp/no-missing-g-flag
  noOptionalAssertion: /\w+(?::|\b)/, // Rule: regexp/no-optional-assertion
  noPotentiallyUselessBackreference: /(a+)b\1/, // Rule: regexp/no-potentially-useless-backreference
  noSuperLinearBacktracking: /a*b+a*$/, // Rule: regexp/no-super-linear-backtracking
  noUselessAssertions: /\bfoo\b/, // Rule: regexp/no-useless-assertions
  noUselessBackreference: /(a?)b\1/, // Rule: regexp/no-useless-backreference
  strict: /\}/, // Rule: regexp/strict
};

// Module Exports
export { a, b, regularExpressions };
