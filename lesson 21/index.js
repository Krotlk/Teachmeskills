//task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const fibonacci1 = fibonacci;

fibonacci.forEach(function(a) {
    console.log(a);
})

fibonacci1.forEach(item => {
    console.log(item);
})

//task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

/*const members = users.map(function(item, index) {
    return 'member ' + (index +=1) + ': ' + item 
})
*/

const members = users.map((item, index) => {
    return 'member ' + (index +=1) + ': ' + item 
})

console.log(members);

//task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];
/*
let positiveNumbers = numbers.filter(function(item) {
    return item > 0
})
*/
let positiveNumbers = numbers.filter(item => item > 0);

console.log(positiveNumbers);

//task 4

//let result = fibonacci.reduce((sum, current) => sum + current, 0);

let result = fibonacci.reduce(function(sum, current) {
    return sum + current
},0)

console.log(result);

//task 5

const numbers2 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

//let evenNumber = numbers2.find(item => item % 2 == 0);

let evenNumber = numbers2.find(function(item) {
    return item % 2 == 0
})

console.log(evenNumber);
 