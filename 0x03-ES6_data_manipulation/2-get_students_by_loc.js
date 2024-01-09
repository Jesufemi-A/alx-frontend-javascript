export default function getStudentsByLocation(arrObj, city) {
  if (!Array.isArray(arrObj)) {
    return [];
  }
  const arr = arrObj.filter((arr) => arr.location === city);
  return arr;
}
