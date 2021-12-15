// src = https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
    let counter = 0;
    let number = num;

    while (number >= 10) {
        number = number
            .toString()
            .split('')
            .reduce((a, b) => a * b);
            counter++;
    }

    return counter;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
