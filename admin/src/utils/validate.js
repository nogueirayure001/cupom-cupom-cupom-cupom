export function validate(fields) {
  const keyValueArray = Object.entries(fields);

  return keyValueArray.every(([key, value]) => value.valid);
}
