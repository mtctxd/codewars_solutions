//src = https://www.codewars.com/kata/58287977ef8d4451f90001a0

function isSameLanguage(list) {
    const language = list[0].language;
    const sameLanguageAsFirst = list.filter((dev) => dev.language === language);

    return (sameLanguageAsFirst).length === list.length;
}

var list1 = [
    {
        firstName: 'Daniel',
        lastName: 'J.',
        country: 'Aruba',
        continent: 'Americas',
        age: 42,
        language: 'JavaScript',
    },
    {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 22,
        language: 'JavaScript',
    },
    {
        firstName: 'Hanna',
        lastName: 'L.',
        country: 'Hungary',
        continent: 'Europe',
        age: 65,
        language: 'JavaScript',
    },
];

var list2 = [
    {
        firstName: 'Mariami',
        lastName: 'G.',
        country: 'Georgia',
        continent: 'Europe',
        age: 29,
        language: 'Python',
    },
    {
        firstName: 'Mia',
        lastName: 'H.',
        country: 'Germany',
        continent: 'Europe',
        age: 39,
        language: 'Ruby',
    },
    {
        firstName: 'Maria',
        lastName: 'I.',
        country: 'Greece',
        continent: 'Europe',
        age: 32,
        language: 'C',
    },
];

console.log(isSameLanguage(list1), true);
console.log(isSameLanguage(list2), false);
