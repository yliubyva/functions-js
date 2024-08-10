"use strict";

function showInvalidNumberAlert() {
  alert(`Будь ласка, введіть коректні числа`);
}
// //min-1
//function declaration
function sayHi() {
  alert(`Привіт`);
}

//function expression
const sayHi1 = function () {
  alert(`Привіт`);
};

//arrow function
const sayHi2 = function sayHiByAlert() {
  alert(`Привіт`);
};

const sayHi3 = () => alert(`Привіт`);
const sayHi4 = () => {
  alert(`Привіт`);
};

//min-2
function showNumArguments(a, b, c, d) {
  console.log(arguments.length);
}

showNumArguments(1, 2, 3, 4, 5, 6, 7); //7
showNumArguments(1); //1
showNumArguments(); //0

//min-3
function num(a, b) {
  if (a < b) {
    console.log(-1);
  } else if (a > b) {
    console.log(1);
  } else {
    console.log(0);
  }
}

num(2, 3); //-1
num(4, 1); //1
num(1, 1); //0

//min-4
alert(`Знайдемо факторіал числа!`);
let numFact;
let answer = false;

function calcFactorial(n) {
  return n != 1 ? n * calcFactorial(n - 1) : 1;
}

while (!answer) {
  numFact = Number(prompt(`Введіть число для обчислення факторіалу`));
  if (isNaN(numFact)) {
    showInvalidNumberAlert();
  } else {
    alert(`Факторіал числа ${numFact} є ${calcFactorial(numFact)}`);
    answer = true;
  }
}

//min-5
let num1;
let num2;
let num3;
let response = false;

function transformNumber(a, b, c) {
  return Number(a + b + c);
}

alert(`Давайте поєднаємо три різні цифри в одне число!`);
while (!response) {
  num1 = prompt(`Введіть першу цифру`);
  num2 = prompt(`Введіть другу цифру`);
  num3 = prompt(`Введіть третю цифру`);
  if (isNaN(Number(num1)) || isNaN(Number(num2)) || isNaN(Number(num3))) {
    showInvalidNumberAlert();
  } else {
    alert(transformNumber(num1, num2, num3));
    console.log(typeof transformNumber(num1, num2, num3));
    response = true;
  }
}

//min-6
alert(`Знайдемо площу Вашого прямокутника!`);
let width;
let length;
let s = 0;
let confirmation = false;

function askValues() {
  width = Number(prompt(`Введіть ширину прямокутника`));
  length = Number(prompt(`Введіть довжину прямокутника`));
}

function calcArea(a, b) {
  if (b === undefined || b === 0) {
    b = a;
    alert(`Схоже у Вас квадрат!`);
  }
  return a * b;
}

while (!confirmation) {
  askValues();
  if (isNaN(width) || isNaN(length)) {
    showInvalidNumberAlert();
  } else {
    s = calcArea(width, length);
    confirmation = true;
  }
}

alert(`Площа Вашого чотирикуника дорівнює ${s}`);
