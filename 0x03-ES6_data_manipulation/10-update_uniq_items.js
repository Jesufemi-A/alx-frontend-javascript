export default function updateUniqueItems(m) {
  if (!(m instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    m.forEach((value, key) => {
      if (value === 1) { m.set(key, 100); }
    });
  }
}
