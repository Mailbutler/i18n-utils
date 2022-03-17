export function sortObject(object: Record<string, unknown>): Record<string, unknown> {
  const sortedObj = {},
    keys = Object.keys(object);

  keys.sort((key1, key2) => {
    (key1 = key1.toLowerCase()), (key2 = key2.toLowerCase());
    if (key1 < key2) return -1;
    if (key1 > key2) return 1;
    return 0;
  });

  // recursively sort object
  keys.forEach((key) => {
    if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
      sortedObj[key] = sortObject(object[key] as Record<string, unknown>);
    } else {
      sortedObj[key] = object[key];
    }
  });

  return sortedObj;
}
