// src = https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
    const len = value.toString().length;
    let sum = 0;
    value.toString().split('').forEach(number => {
        sum += number ** len;
    });

    return sum === value;
}

console.log(narcissistic(7), true, '7 is narcissistic');
console.log(narcissistic(371), true, '371 is narcissistic');
