// src = https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
    let stringArray = str.split(' ');
    let result = [];

    stringArray.forEach((word) => {
        if (/[^a-zA-Z]/.test(word) && word.length === 1) {
            return result.push(word);
        } else if (word.length === 1) {
            return result.push(word + 'ay');
        }

        if (!/[^a-zA-Z]/.test(word)) {
            let letters = word.split('');
            let firstLetter = letters.shift();
            let wordEnding = firstLetter + 'ay';
            letters.push(wordEnding);
            return result.push(letters.join(''));
        } else if (/[^a-zA-Z]/.test(word)) {
            let letters = word.split('');
            let firstLetter = letters.shift();
            let wordEnding = firstLetter + 'ay';
            letters.splice(letters.length - 1, 0, wordEnding);
            return result.push(letters.join(''));
        }
    });

    return result.join(' ');
}

// console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');

// console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay');

console.log(pigIt('Hello, how are you?'), 'elloHay, owhay reaay ouyea?');

// // expected 'Oay emporatay oay oresmay !ay' to equal 'Oay emporatay oay oresmay !'

// console.log(pigIt('O tempora o mores !'), 'Oay emporatay oay oresmay !');
