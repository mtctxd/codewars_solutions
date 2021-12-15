// src = https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
    let oddCount = 0;
    let evenCount = 0;

    for (let i = 0; i < integers.length; i++) {
        const number = integers[i];
        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log(oddCount, evenCount)

    if (evenCount > oddCount) {
        for (let i = 0; i < integers.length; i++) {
            const num = integers[i];
            console.log(num)
            if (Math.abs(num) % 2 === 1) {
                return num;
            }
        }
    }

    if (evenCount < oddCount) {
        for (let i = 0; i < integers.length; i++) {
            const num = integers[i];
            console.log(num)
            if (Math.abs(num) % 2 === 0) {
                return num;
            }
        }
    }
}

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11);
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160);
console.log(findOutlier([ 2, -6, 8, -10, -3 ]), -3);
