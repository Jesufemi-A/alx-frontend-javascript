interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Los",
  lastName: "Wade",
  age: 21,
  location: "City 1",
};

const student2: Student = {
  firstName: "John",
  lastName: "Smith",
  age: 22,
  location: "City 2",
};


const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

// Append a header row
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.textContent = 'First Name';
headerCell2.textContent = 'Location';

// Append rows for each student in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
