// Get DOM elements
const inputBox = document.getElementById('box');
const sortButton = document.querySelector('.sort');
const sumButton = document.querySelector('.sum');
const reverseButton = document.querySelector('.reverse');
const findEvenButton = document.querySelector('.findeven');
const findOddButton = document.querySelector('.findodd');
const output = document.querySelector('.output');

// Function to parse input into an array of numbers
function getInputArray() {
    const input = inputBox.value.trim();
    if (!input) {
        alert('Please enter numbers separated by spaces or commas.');
        return [];
    }
    // Split input by spaces or commas and convert to numbers
    return input.split(/[\s,]+/).map(Number);
}

// Sort the array
sortButton.addEventListener('click', () => {
    const numbers = getInputArray();
    if (numbers.length === 0) return;
    const sorted = numbers.sort((a, b) => a - b);
    output.textContent = `Sorted Array: [${sorted.join(', ')}]`;
});

// Calculate the sum of the array
sumButton.addEventListener('click', () => {
    const numbers = getInputArray();
    if (numbers.length === 0) return;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    output.textContent = `Sum: ${sum}`;
});

// Reverse the array
reverseButton.addEventListener('click', () => {
    const numbers = getInputArray();
    if (numbers.length === 0) return;
    const reversed = numbers.reverse();
    output.textContent = `Reversed Array: [${reversed.join(', ')}]`;
});

// Find even numbers in the array
findEvenButton.addEventListener('click', () => {
    const numbers = getInputArray();
    if (numbers.length === 0) return;
    const evens = numbers.filter(num => num % 2 === 0);
    output.textContent = `Even Numbers: [${evens.join(', ')}]`;
});

// Find odd numbers in the array
findOddButton.addEventListener('click', () => {
    const numbers = getInputArray();
    if (numbers.length === 0) return;
    const odds = numbers.filter(num => num % 2 !== 0);
    output.textContent = `Odd Numbers: [${odds.join(', ')}]`;
});