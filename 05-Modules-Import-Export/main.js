import { add, subtract, multiply, divide } from './math-utils.js';

const resultDisplay = document.getElementById('result');

const renderResult = (label, value) => {
  const p = document.createElement('p');
  p.innerHTML = `<strong>${label}:</strong> ${value}`;
  resultDisplay.appendChild(p);
};

const num1 = 20;
const num2 = 5;

renderResult('Addition (20 + 5)', add(num1, num2));
renderResult('Subtraction (20 - 5)', subtract(num1, num2));
renderResult('Multiplication (20 * 5)', multiply(num1, num2));
renderResult('Division (20 / 5)', divide(num1, num2));

console.log('Modules loaded successfully. Calculations performed.');
