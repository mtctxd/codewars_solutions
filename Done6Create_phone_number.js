// src = https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
    let operator = '';
    let nomer = '';

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if (i < 3) {
            operator += number;
        } else if (i === 5) {
            nomer += number + '-';
        } else if (i !== 5) {
            nomer += number;
        }
    }

    return `(${operator}) ${nomer}`;
}

console.log(
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
    '(123) 456-7890'
);
console.log(
    createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
    '(111) 111-1111'
);
console.log(
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
    '(123) 456-7890'
);
