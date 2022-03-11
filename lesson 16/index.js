let admin;
let firstName= "Джон";
admin= firstName;

alert (admin);

//task 1

let x = 20;  
let y = 58;
let z = 42;

console.log(x+y+z);

//task 2

let secondInMinutes = 60;
let minutesInhour = 60;
let hourInDay = 24;
let dayInYear = 365;
let yearInSecond=(dayInYear * hourInDay * minutesInhour * secondInMinutes);
let myAgeInSeconds = (prompt("Введите возраст"));

console.log("Year in seconds", myAgeInSeconds * yearInSecond);

//task 3

let count = 42;
let username = "42";
let usernameToNubmer = +username;
let countToText = `${count}`;

console.log(usernameToNubmer);
console.log(countToText);

//task 4

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(a+=`${b}`,"",c);

//task 5

let wordFirst = "доступ";
let wordSecond = "морпех";
let wordThird = "наледь";
let wordFour = "попрек";
let wordFive = "рубило";
let wordLength = wordFirst.length + wordSecond.length + wordThird.length + wordFour.length + wordFive.length;

console.log(wordLength);

//task 6

//task 7

let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");

console.log("Your name:", userName,",", "Your age:", userAge);