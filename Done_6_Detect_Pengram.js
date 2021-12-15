// src =https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
    const lettersCount = {};
    let validString = string.toLowerCase().split('');

    validString.forEach((letter) => {
        if (!lettersCount[letter]) {
            lettersCount[letter] = 0;
        }
        lettersCount[letter]++;
    });

    const sortedString = Object.keys(lettersCount).join('');
    let resultString = '';

    for (let i = 0; i < sortedString.length; i++) {
        let letter = sortedString[i];
        let letterCode = sortedString.charCodeAt(i);
        console.log(sortedString.charCodeAt(i));

        if (letterCode >= 97 && letterCode <= 122) {
            resultString += letter;
        }
    }

    return resultString.length === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'), true);
console.log(isPangram('This is not a pangram.'), false);
