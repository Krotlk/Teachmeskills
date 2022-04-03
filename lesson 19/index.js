//task 1-2

const person = {
    name: "Wewe",
    age: 25,
    color: "white",

};

delete person.age;
console.log(person);
console.log("name" in person);

//task 3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for ( key in student ) {
    alert(key);
    alert( student[key] );
    console.log( key + ":", student[key] );
}

//task 4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

console.log( colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue ); 

//task 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    john: 664,
    alexandra: 199
}

let total = 0;
let count = Object.keys(salaries).length;

for (key in salaries) {
    total += salaries[key];
    console.log(total);
}

console.log(total / count);

//task 6

let login = prompt("Enter login");
let password = prompt("Enter password");

let auth = {
    login,
    password,
}

let loginConfirm = prompt("Confirm login");
let passwordConfirm = prompt("Confirm password");

if (loginConfirm === login && passwordConfirm === password){
    console.log("Welcome!");
} else {
    console.log("Try again");
}
 