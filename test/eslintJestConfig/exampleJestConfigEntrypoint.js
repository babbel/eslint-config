// Internal Imports
import { addQueryParameter } from './exampleJestConfigImport.js';

// Test Definitions
describe('addQueryParam', () => {
  describe('when provided with a URL', () => {
    describe('when the URL does not have a search', () => {
      it('inserts query param correctly', () => {
        expect(addQueryParameter('http://foo.bar', 'baz')).toBe('http://foo.bar?baz');
      });
    });

    describe('when the URL has a search', () => {
      it('inserts query param correctly', () => {
        expect(addQueryParameter('http://foo.bar?baz', 'pong')).toBe('http://foo.bar?baz&pong');
      });
    });
  });

  describe('when provided with a path object', () => {
    const pathObject = {
      hash: '#something',
      pathname: 'http://foo.bar',
    };

    describe('when the path does not have a search', () => {
      it('inserts query param correctly', () => {
        expect(addQueryParameter(pathObject, 'baz')).toStrictEqual({
          ...pathObject,
          search: '?baz',
        });
      });
    });

    describe('when the path has a search', () => {
      const pathObjectWithSearch = {
        ...pathObject,
        search: '?baz',
      };

      it('inserts query param correctly', () => {
        expect(addQueryParameter(pathObjectWithSearch, 'pong')).toStrictEqual({
          ...pathObject,
          search: '?baz&pong',
        });
      });
    });
  });
});
