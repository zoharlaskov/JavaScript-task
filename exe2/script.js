let num = 10;
let str = "hello";
let bool = true;

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);

let firstVar = 42;
let secondVar = "42";

if (typeof firstVar === typeof secondVar) {
  console.log("The types of firstVar and secondVar are the same.");
} else {
  console.log("The types of firstVar and secondVar are different.");
}

const noValue = undefined;
const emptyValue = null;
console.log(noValue);
console.log(emptyValue);

let x;
const y = 10;
console.log(typeof y);
x = "The value of x is " + y + " and its type is " + typeof y;
console.log(x);
