export default function cleanSet(st, startString) {
  if (st && (st instanceof Set) && startString && typeof (startString) === 'string') {
    return Array.from(st)
      .filter((x) => x && x.startsWith(startString))
      .map((x) => x.replace(startString, ''))
      .join('-');
  }
  return '';
}
