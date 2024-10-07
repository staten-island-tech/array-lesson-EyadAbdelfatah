//assignment 1

//part one:log each student and grade
const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
  ];
students.forEach((student)=>console.log(student.name + ":" + student.grade))

//part two

//part two a:filter students who have grades above 80
const goodStudent=students.filter((student)=>student.grade>80);
console.log(goodStudent)
//part two b:filter students who are 21 or younger
const youngStudents = students.filter((student)=>student.age<=21);
console.log(youngStudents)

