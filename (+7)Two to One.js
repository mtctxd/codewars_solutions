// src = https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  // make result array

  const result = [];

  // add awo strings

  const ab = s1 + s2;

  // iterate thrue string

  for (let i = 0; i < ab.length; i++) {
    const letter = ab[i];

    // check if current letter not in string if not, add to string

    if (!result.includes(letter)) {
      result.push(letter);
    }
  }

  // return sorted string

  return result.sort().join('');
}

console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
console.log(
  longest('loopingisfunbutdangerous', 'lessdangerousthancoding'),
  'abcdefghilnoprstu'
);
console.log(
  longest('inmanylanguages', 'theresapairoffunctions'),
  'acefghilmnoprstuy'
);
