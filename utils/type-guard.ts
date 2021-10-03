export const isUndefined = (value: unknown | undefined): value is undefined =>
  typeof value === "undefined";

export const isString = (value: unknown | undefined): value is string =>
  typeof value === "string";

export const isNull = (value: unknown | null): value is null => value === null;
