// src = https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    const obj = {};

    arr.forEach((number) => {
        if (!obj[number]) {
            obj[number] = 0;
        }
        obj[number]++;
    });

    let values = Object.entries(obj);
    let min = values[0];

    for (let i = 0; i < values.length; i++) {
        const number = values[i];

        if (number[1] < min[1]) {
            min = number;
        }
    }

    return +min[0];
}

console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
console.log(findUniq([3, 10, 10, 10, 10, 5, 3, 3, 3]), 5);
