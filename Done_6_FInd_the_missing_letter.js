// src = https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {
    let alphabet = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < array.length; i++) {
        if (alphabet.indexOf(array[i + 1]) - alphabet.indexOf(array[i]) > 1) {
            return alphabet.charAt(alphabet.indexOf(array[i]) + 1);
        }
    }

    return 'There is no missing letter';
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
