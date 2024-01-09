export default function hasValuesFromArray(set, arr) {
  for (const ar of arr) {
    if (!set.has(ar)) {
      return false;
    }
  }
  return true;
}
