// src = https://www.codewars.com/kata/583a8bde28019d615a000035

function findOddNames(list) {
    const result = [];

    for (let i = 0; i < list.length; i++) {
        const person = list[i];
        let codecount = 0;

        let personCode = [...person.firstName];
        personCode.forEach((letter) => {
            codecount += letter.charCodeAt();
        });

        if (codecount % 2 === 1) {
            result.push(person);
        }
    }

    return result;
}

var list1 = [
    {
        firstName: 'Aba',
        lastName: 'N.',
        country: 'Ghana',
        continent: 'Africa',
        age: 21,
        language: 'Python',
    },
    {
        firstName: 'Abb',
        lastName: 'O.',
        country: 'Israel',
        continent: 'Asia',
        age: 39,
        language: 'Java',
    },
];

var answer1 = [
    {
        firstName: 'Abb',
        lastName: 'O.',
        country: 'Israel',
        continent: 'Asia',
        age: 39,
        language: 'Java',
    },
];

var list2 = [
    {
        firstName: 'Aba',
        lastName: 'N.',
        country: 'Ghana',
        continent: 'Africa',
        age: 21,
        language: 'Python',
    },
];

var answer2 = [];

console.log(findOddNames(list1), answer1);
console.log(findOddNames(list2), answer2);
