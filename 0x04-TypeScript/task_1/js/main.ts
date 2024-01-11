interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attribute
}

const createTeacher = (teacher: Teacher): Teacher => {
  // Ensure required attributes are present
  if (!teacher.firstName || !teacher.lastName || !teacher.location) {
    throw new Error('firstName, lastName, and location are required attributes.');
  }

  // Ensure fullTimeEmployee is always defined
  teacher.fullTimeEmployee = teacher.fullTimeEmployee !== undefined ? teacher.fullTimeEmployee : true;

  return teacher;
};
