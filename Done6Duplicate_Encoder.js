// src = https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
    let validWord = [...word.toLowerCase()];
    let result = [];

    for (let i = 0; i < validWord.length; i++) {
        const tempWord = [...word.toLowerCase()];
        const letter = validWord[i];
        tempWord.splice(i, 1);

        if (!tempWord.includes(letter)) {
            result.push('(');
        } else {
            result.push(')');
        }
    }

    return result.join('');
}

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())', 'should ignore case');
console.log(duplicateEncode('(( @'), '))((');
