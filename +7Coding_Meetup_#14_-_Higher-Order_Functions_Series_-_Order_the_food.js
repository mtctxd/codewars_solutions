// src = https://www.codewars.com/kata/583952fbc23341c7180002fd

function orderFood(list) {
    const result = {};

    list.forEach((dev) => {
        let food = dev.meal;
        if (!result[food]) {
            result[food] = 0;
        }
        result[food]++;
    });

    return result;
}

var list1 = [
    {
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'C',
        meal: 'vegetarian',
    },
    {
        firstName: 'Anna',
        lastName: 'R.',
        country: 'Liechtenstein',
        continent: 'Europe',
        age: 52,
        language: 'JavaScript',
        meal: 'standard',
    },
    {
        firstName: 'Ramona',
        lastName: 'R.',
        country: 'Paraguay',
        continent: 'Americas',
        age: 29,
        language: 'Ruby',
        meal: 'vegan',
    },
    {
        firstName: 'George',
        lastName: 'B.',
        country: 'England',
        continent: 'Europe',
        age: 81,
        language: 'C',
        meal: 'vegetarian',
    },
];

var answer = { vegetarian: 2, standard: 1, vegan: 1 };

console.log(orderFood(list1), answer);
