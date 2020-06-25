const classA = [
  {
    name: "Lucas",
    grade: 10
  },
  {
    name: "Pedro",
    grade: 6
  },
  {
    name: "Gabriel",
    grade: 4.5
  },
];

const classB = [
  {
    name: "Clayton",
    grade: 2
  },
  {
    name: "Robson",
    grade: 5
  },
  {
    name: "João",
    grade: 7.5
  },
];

function calculateAverage(students) {
  return (students[0].grade + students[1].grade + students[2].grade) / 3;
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} avarage: ${average.toFixed(2)}. Congrats!`);
  } else {
    console.log(`${turma} ${average}. Is not good`);
  }
}

function markAssFlunked(student) {
  student.flunked = false;
  
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`${student.name} flunked!`);
  }
}

function studentsReprovados(students) {
  for (let student of students) {
    markAssFlunked(student);
    sendFlunkedMessage(student);
  }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, "Class A");
sendMessage(average2, "Class B");

studentsReprovados(classA);
studentsReprovados(classB);