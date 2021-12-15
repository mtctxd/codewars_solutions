// src = https://www.codewars.com/kata/5829ca646d02cd1a65000284/train/javascript

function isAgeDiverse(list) {
    const agesCount = {};

    list.forEach((person) => {
        const ageOf = person.age;

        switch (true) {
            case ageOf <= 19:
                agesCount.teens = 1;
                break;

            case ageOf >= 20 && ageOf < 30:
                agesCount.twenties = 1;
                break;

            case ageOf >= 30 && ageOf < 40:
                agesCount.thirties = 1;
                break;

            case ageOf >= 40 && ageOf < 50:
                agesCount.forties = 1;
                break;

            case ageOf >= 50 && ageOf < 60:
                agesCount.fifties = 1;
                break;

            case ageOf >= 60 && ageOf < 70:
                agesCount.sixsties = 1;
                break;

            case ageOf >= 70 && ageOf < 80:
                agesCount.seventies = 1;
                break;

            case ageOf >= 80 && ageOf < 90:
                agesCount.eighties = 1;
                break;

            case ageOf >= 90 && ageOf < 100:
                agesCount.nineties = 1;
                break;

            case ageOf >= 100:
                agesCount.centurian = 1;
                break;

            default:
                break;
        }
    });

    return Object.keys(agesCount).length === 10 ? true : false;
}

const list1 = [
    {
        firstName: 'Harry',
        lastName: 'K.',
        country: 'Brazil',
        continent: 'Americas',
        age: 19,
        language: 'Python',
    },
    {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 29,
        language: 'JavaScript',
    },
    {
        firstName: 'Jing',
        lastName: 'X.',
        country: 'China',
        continent: 'Asia',
        age: 39,
        language: 'Ruby',
    },
    {
        firstName: 'Noa',
        lastName: 'A.',
        country: 'Israel',
        continent: 'Asia',
        age: 40,
        language: 'Ruby',
    },
    {
        firstName: 'Andrei',
        lastName: 'E.',
        country: 'Romania',
        continent: 'Europe',
        age: 59,
        language: 'C',
    },
    {
        firstName: 'Maria',
        lastName: 'S.',
        country: 'Peru',
        continent: 'Americas',
        age: 60,
        language: 'C',
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 75,
        language: 'Python',
    },
    {
        firstName: 'Chloe',
        lastName: 'K.',
        country: 'Guernsey',
        continent: 'Europe',
        age: 88,
        language: 'Ruby',
    },
    {
        firstName: 'Viktoria',
        lastName: 'W.',
        country: 'Bulgaria',
        continent: 'Europe',
        age: 98,
        language: 'PHP',
    },
    {
        firstName: 'Piotr',
        lastName: 'B.',
        country: 'Poland',
        continent: 'Europe',
        age: 128,
        language: 'JavaScript',
    },
];

const list2 = [
    {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 29,
        language: 'Ruby',
    },
    {
        firstName: 'Amar',
        lastName: 'V.',
        country: 'Bosnia and Herzegovina',
        continent: 'Europe',
        age: 32,
        language: 'Ruby',
    },
];

const list3 = [
    {
        firstName: 'Sofia',
        lastName: 'P.',
        country: 'Italy',
        continent: 'Europe',
        age: 41,
        language: 'Clojure',
    },
    {
        firstName: 'Jayden',
        lastName: 'P.',
        country: 'Jamaica',
        continent: 'Americas',
        age: 42,
        language: 'JavaScript',
    },
    {
        firstName: 'Sou',
        lastName: 'B.',
        country: 'Japan',
        continent: 'Asia',
        age: 43,
        language: 'Python',
    },
    {
        firstName: 'Rimas',
        lastName: 'C.',
        country: 'Jordan',
        continent: 'Asia',
        age: 44,
        language: 'Java',
    },
];

console.log(isAgeDiverse(list1), true);
console.log(isAgeDiverse(list2), false);
console.log(isAgeDiverse(list3), false);
