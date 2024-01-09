export default function updateStudentGradeByCity(arrObj, city, newGrades) {
  const newArr = arrObj.filter((arr) => arr.location === city).map((arr) => {
    const newGrade = newGrades.find((grade) => grade.studentId === arr.id);
    if (newGrade) {
      return {
        ...arr,
        grade: newGrade.grade,
      };
    }
    return {
      ...arr,
      grade: 'N/A',
    };
  });
  return newArr;
}
