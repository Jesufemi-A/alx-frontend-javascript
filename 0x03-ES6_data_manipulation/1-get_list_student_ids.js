export default function getListStudentIds(arrObj) {
  if (!Array.isArray(arrObj)) {
    return [];
  }
  const arrId = arrObj.map((obj) => obj.id);
  return arrId;
}
