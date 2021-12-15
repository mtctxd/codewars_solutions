// src = https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/train/javascript

function well(x) {
    let decide = 0;

    x.forEach((element) => {
        element.forEach((idea) => {
            if (idea.toString().toLowerCase() === 'good') {
                decide++;
                console.log(idea.toLowerCase());
            }
        });
    });

    // if (decide === 0) {
    //     return 'Fail!';
    // } else if (decide <= 2 && decide !== 0) {
    //     return 'Publish!';
    // } else if (decide > 2) {
    //     return 'I smell a series!';
    // }

    return decide === 0
        ? 'Fail!'
        : decide <= 2 && decide !== 0
        ? 'Publish!'
        : decide > 2
        ? 'I smell a series!'
        : 'Fail!';
}

console.log(
    well([
        ['bad', 'bAd', 'bad'],
        ['bad', 'bAd', 'bad'],
        ['bad', 'bAd', 'bad'],
    ]),
    'Fail!'
);
console.log(
    well([
        ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
        ['bad', 'bAd', 'bad'],
        ['GOOD', 'bad', 'bad', 'bAd'],
    ]),
    'Publish!'
);
console.log(
    well([
        ['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'],
        ['bad'],
        ['gOOd', 'BAD'],
    ]),
    'I smell a series!'
);

console.log(
    well([[6, 'CoNcenTraTe', '8', 'six'], ['RAD'], [6, 'bad', 'bad']]),
    'Fail!'
);
