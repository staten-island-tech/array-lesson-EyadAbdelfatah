//assignment 1

//part one:log each student and grade
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
students.forEach((student) => console.log(student.name + ":" + student.grade));

//part two

//part two a:filter students who have grades above 80
const goodStudent = students.filter((student) => student.grade > 80);
console.log(goodStudent);

//part two b:filter students who are 21 or younger
const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

//part 3

//part three a:Log the names of students who scored above 80.
const goodStudentName = students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log(student.name));

//part three b:
const youngStudentName = students
  .filter((student) => student.age <= 21)
  .forEach((student) => console.log(student.name));

//Assignment 2

//part 1
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];
//part one: Log the name and price of each product.
const namePrice = products.forEach((product) =>
  console.log(product.name + ":" + product.price)
);

//part two: increase the price
const increasePrice = products.forEach((product) =>
  console.log(Math.round(product.price * 1.1))
);

//part three: Use forEach to create a list of all unique categories in the products array.
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

//Filter by Category: Create a new array that only includes products from the 'Electronics' category.

const electronics = products.filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics);
//Filter by Price: Filter products that cost more than $300 and store them in a new array.
const expensive = products.filter((product) => product.price >= 300);
console.log("Expensive Products:", expensive)
//4.5 or above rating
const good = products.filter((product) => product.rating >= 4.5);
console.log("Good Products:", good)
//high rated names
const goodNames = products.filter((product)=>product.rating>=4.5).forEach((product)=>console.log(product.name))
//cheap
const cheap = products.filter((product)=>product.price<=1000).forEach((product)=>console.log(product))