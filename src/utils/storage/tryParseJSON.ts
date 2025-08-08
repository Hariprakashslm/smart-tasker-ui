export const tryParseJSON = <T>(value: string, fallback: T): T => {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};