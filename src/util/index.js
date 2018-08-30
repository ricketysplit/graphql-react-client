export const applyAll = (...funcs) => component =>
  funcs.reduce((c, fn) => fn(c), component);

export default null;
