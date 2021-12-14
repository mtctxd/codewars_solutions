// src = https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

function partsSums(ls) {
    let counter = 0;
    let result = [];
    if (ls.length === 0 || ls === undefined) {
        return result;
    }

    result.push(ls.slice(counter).reduce((a, b) => a + b));
    
    counter++;

    return partsSums(ls);
    // CODE BELOW IS TOO SLOW????
    /*
    let result = [];

    if (ls.length === 0) {
        return [0];
    }

    for (let i = 0; i < ls.length; i++) {
        let temp = ls;

        let sum = result.push(temp.slice(i).reduce((a, b) => a + b));

        ls.length - 1 === i ? result.push(0) : false;
    }

    return result;
*/
}

// console.log(partsSums([]), [0]);
console.log(partsSums([0, 1, 3, 6, 10]), [20, 20, 19, 16, 10, 0]);
console.log(partsSums([1, 2, 3, 4, 5, 6]), [21, 20, 18, 15, 11, 6, 0]);
console.log(
    partsSums([
        744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358,
    ]),
    [
        10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270,
        2581057, 2580168, 2579358, 0,
    ]
);
