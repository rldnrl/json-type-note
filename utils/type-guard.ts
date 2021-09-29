export const isUndefined = (value: unknown | undefined): value is undefined => {
  return typeof value === "undefined";
};

export const isString = (value: unknown | undefined): value is string => {
  return typeof value === "string"
}