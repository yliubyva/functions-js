"use strict";

//norm-1
let getNum;
let sumDivisors = 0;
let answer = false;

function askValuesN() {
  getNum = Number(prompt(`Введіть Ваше число`));
}

function calcSumDivisors(num) {
  let dividers = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      dividers += i;
    }
  }
  return dividers;
}

function isPerfectNum(num) {
  return num === calcSumDivisors(num);
}

alert(`Дізнаємось чи Ваше число досконале!`);

while (!answer) {
  askValuesN();
  if (getNum <= 0) {
    alert(`Число має бути більше нуля`);
  } else if (isNaN(getNum)) {
    alert(`Будь ласка, введіть коректне число`);
  } else {
    answer = true;
  }
}

sumDivisors = calcSumDivisors(getNum);

if (isPerfectNum(getNum) === true) {
  alert(`Число ${getNum} досконале`);
} else {
  alert(`Число ${getNum} не досконале`);
}

//norm-2
alert(`Дізнаємось чи є досконалі числа у Вашому діапазоні!`);

let start;
let end;
let confirmation = false;

function findPerfectNum(a, b) {
  let hasPerfectNum = false;

  for (let i = start; i <= end; i++) {
    calcSumDivisors(i);
    if (isPerfectNum(i)) {
      alert(`Досконалі числа цього діапазону: ${i}`);
      hasPerfectNum = true;
    }
  }

  if (!hasPerfectNum) {
    alert(`В заданому діапазоні немає досконалих чисел`);
  }
}

function askRange() {
  start = Number(prompt(`Задайте початкове значення`));
  end = Number(prompt(`Задайте кінцеве значення`));
}

while (!confirmation) {
  askRange();
  if (isNaN(start) || isNaN(end)) {
    alert(`Будь ласка, введіть коректні числа`);
  } else if (start > end) {
    alert(`Початкове значення не повинно бути більше кінцевого`);
  } else {
    findPerfectNum(start, end);
    confirmation = true;
  }
}
