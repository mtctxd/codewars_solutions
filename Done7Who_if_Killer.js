// src = https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript

function killer(suspectInfo, dead) {
    let matches = {};

    for (const key in suspectInfo) {
        if (Object.hasOwnProperty.call(suspectInfo, key)) {
            const suspect = suspectInfo[key];

            for (let i = 0; i < dead.length; i++) {
                const deadperson = dead[i];

                if (suspect.includes(deadperson)) {
                    if (!matches[key]) {
                        matches[key] = 0;
                    }
                    matches[key]++;
                }
            }
        }
    }

    return Object.keys(matches).reduce((a, b) =>
        matches[a] > matches[b] ? a : b
    );
}

console.log(
    killer(
        {
            James: ['Jacob', 'Bill', 'Lucas'],
            Johnny: ['David', 'Kyle', 'Lucas'],
            Peter: ['Lucy', 'Kyle'],
        },
        ['Lucas', 'Bill']
    ),
    'James'
);

console.log(
    killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben']),
    'Megan'
);
