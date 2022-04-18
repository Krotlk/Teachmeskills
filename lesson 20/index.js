//task 1

const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//task 2

const animals = ['monkey', 'dog', 'cat'];
let lastElement = animals.pop();

console.log(lastElement);

//task 3

const numbers = [5, 43, 63, 23, 90];
let emtpyArray = numbers.splice();

const numbers1 = numbers;
let uhh = numbers1.filter(item => item == 0);

console.log(uhh);
console.log(emtpyArray);

//task 4

const students = ['Polina', 'Dasha', 'Masha'];

students.splice(0, 1, 'Andrey');
students.splice(2,1, 'Borya');

console.log(students);

//task 5

const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for(let name of cats) {
    console.log(name);
}

//task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers);
console.log(allNumbers.indexOf(+'8'));

//task 7

const binary = [0, 0, 0, 0];
const trueBinary = binary.join('1');

console.log(trueBinary);
 