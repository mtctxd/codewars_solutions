// src = https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript

function Hero(name) {
    const result = {};
    let n = name + '';

    if (name === undefined) {
        result.name = 'Hero';
    } else {
        result.name = n;
    }

    result.position = '00';
    result.health = 100;
    result.damage = 5;
    result.experience = 0;

    return result;
}



function Hero(name = 'Hero') {
    const result = {};
    
    result.name = name;
    result.position = '00';
    result.health = 100;
    result.damage = 5;
    result.experience = 0;

    return result;
}

console.log(Hero());
