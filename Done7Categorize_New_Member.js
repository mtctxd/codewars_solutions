// src = https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data) {
  // make result array

  const result = [];

  // iterate thrue array

  for (let i = 0; i < data.length; i++) {
    const member = data[i];
    const age = member[0];
    const handicap = member[1];

    // check values of i[0] and i[1]

    if (age >= 55 && handicap > 7) {
      // push 'Senior' if true
      result.push('Senior');
    } else {
      // push 'open' if false
      result.push('Open');
    }
  }

  // return result
  return result;
}

assert.deepEqual(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ]),
  ['Open', 'Senior', 'Open', 'Senior']
);
assert.deepEqual(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ]),
  ['Open', 'Open', 'Open', 'Open']
);
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ]),
  ['Senior', 'Open', 'Open', 'Open']
);
