export default function getStudentIdsSum(arrObj) {
  const sum = arrObj.reduce((acc, cur) => acc + cur.id, 0);
  return sum;
}
