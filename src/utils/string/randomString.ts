export const randomString = (length: number) =>
  Math.random().toString(36).substring(2, 2 + length);