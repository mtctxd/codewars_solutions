// src = https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
    let result = [];
    let counter = 0;

    arr.forEach((symbol) => {
        console.log(symbol);
        if (symbol !== 0) {
            result.push(symbol);
        } else {
            counter++;
        }
    });

    for (let i = 0; i < counter; i++) {
        result.push(0);
    }

    return result;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']), [
    false,
    1,
    1,
    2,
    1,
    3,
    'a',
    0,
    0,
]);
