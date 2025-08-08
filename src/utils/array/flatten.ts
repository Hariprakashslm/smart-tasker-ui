export const flatten = (arr: any[]): any[] =>
  arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);