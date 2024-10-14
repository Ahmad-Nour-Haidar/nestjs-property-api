export function omitFields<T>(
  object: T,
  fieldsToOmit: (keyof T)[],
): Partial<T> {
  const result = { ...object };
  fieldsToOmit.forEach((field) => {
    delete result[field];
  });
  return result;
}
