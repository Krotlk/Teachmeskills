/*
//task 1

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let resultFirst = min(13, 7);
console.log(resultFirst);


//task 2

function pow(x, n){
    if (n < 1, n % 1 !== 0){
        return ("oops");
    } else {
        return (x ** n);
    }
}

let resultSecond = pow(2, -5.1);
console.log(resultSecond);

//task 3

function words() {
    let k = 0;
    let stringsearch = ["a", "e", "i", "o", "u"];
    let f = prompt("Enter your string");
    for (let i = 0; i < f.length; i++)
        for (let j = 0; j < stringsearch.length; j++)
            if (f[i] === stringsearch[j]) {
                ++k;
                break;
            }
    return k ? k : "No matches";
}

console.log(words());


function words() {
    let string = "asdfghjk";
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] ==="i" ){
            count+= 1;
        } 
    } return count;
}

console.log(words());
*/

//task 1

function getSum(n) {
    return (1 + n) * n / 2;
}

console.log( getSum(100) );

//task 2

function loanPercents() {
    let creditSum = prompt("How much money do you want");
    return creditSum * 0.85;
}

alert( "Sum of your overpayment" + ": " + loanPercents() );

//task 3

let str = "qwertyuiop";
let x = +prompt("начало строки");
let y = +prompt("конец строки");

function trimString(str, x, y) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= x && i <= y) {
            result += str[i];
        } 
    }
    return result;
}

console.log(trimString(str, x, y));

//task 4

function getNumbersSum(num){
    return num.toString().split('').reduce(function(a, b) {
        return +a + +b;
    })
}
alert(getNumbersSum(2022));

//task 5

function getSum(x, y) {
    if (x === y){
        return x;
    }

    let sum = (x + y) * (y - x + 1) / 2;
    return sum;
  }
  
alert( getSum(-2, -2) );

//task 6

function fooboo() {
    let foo = "foo";
    let boo = "boo";
    let z = true;

    if (z == false) {
        return boo;
    } 
    return foo;
}

console.log( fooboo() );
 