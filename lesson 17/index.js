/*
let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log(a, b, c, d);

let year = prompt("В каком году была опубликвана спецификация ECMAScript-2015?", "");

if (year < 2015) {
    alert( "Это слишком рано..." );
} else if (year > 2015) {
    alert( "Это слтшком поздно..." );
} else {
    alert( "Верно!" );
}
 
let age = prompt("Введите возраст");

if (age > 0){
    alert(1);
} else if (age < 0) {
    alert(-1);
} else {
    alert(0);
}

//task 2

let login = prompt("Введите логин");

if (login === "Админ"){
    var password = prompt("Введите пароль");
    if (password === "Я главный" && password != null) {
        alert ("Здравствуйте");
    } else {
        alert ("Неверный пароль");
    }
} else if(login || password == null) {
    alert ("Отменено");
} else {
    alert("Я вас не знаю!!");
}
 
//task 3

let n = prompt("Enter your number");

for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
}

//task 4

let num = prompt("Enter your number")

while ( num < 100 ) {
    
    
}
*/

//task 1

let first = 'true';
let second = false;
let third = 17;
let fourth = undefined;
let fifth = null;

console.log(typeof first, typeof second, typeof third, typeof fourth, typeof fifth);

//task 2

let height = 15;    
let width = 20;

if (height > width) {
    console.log(height);
} else{
    console.log(width);
}

//task 3

let n = 20;

for (let i = 3; i <= n; i++) {
    if (i % 3 == 0){
        console.log(i);
    }
}

//task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

if (key && documents && pen == true, apple || orange == true) {
    console.log("all things here");
} else {
    console.log("ur forgot smthn");
}

//task 5

