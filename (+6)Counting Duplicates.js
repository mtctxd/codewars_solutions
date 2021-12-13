// src = https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
    const validText = text.toLowerCase().split('');
    let result = 0;
    const checker = {};

    // validText.forEach((letter) => {
    //     if (!checker[letter]) {
    //         checker[letter] = 0;
    //     }
    //     checker[letter]++;
    // });

    for (let i = 0; i < validText.length; i++) {
        const letter = validText[i];
        if (!checker[letter]) {
            checker[letter] = 0;
        }
        checker[letter]++;
    }

    for (const key in checker) {
        if (Object.hasOwnProperty.call(checker, key)) {
            const letterCount = checker[key];

            if (letterCount > 1) {
                result++;
            }
        }
    }

    return result;
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(
    duplicateCount('Indivisibilities'),
    2,
    'characters may not be adjacent'
);
