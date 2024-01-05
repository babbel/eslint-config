// Local Functions
const addQueryParameter = (path, queryParameter) => {
  if (typeof path === 'string') {
    if (path.includes('?')) {
      return `${path}&${queryParameter}`;
    }
    return `${path}?${queryParameter}`;
  }
  const { search } = path;
  return {
    ...path,
    search: search ? `${search}&${queryParameter}` : `?${queryParameter}`,
  };
};

// Module Exports
export { addQueryParameter };
