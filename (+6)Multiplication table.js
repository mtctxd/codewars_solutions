// src = https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript

multiplicationTable = function (size) {
  let result = [];

  for (let i = 1; i < size + 1; i++) {
    const firstnumber = [i];
    const array = [];

    for (let k = 1; k < size + 1; k++) {
      array.push(i * k);
    }

    result.push(array);
  }

  return result;
};

console.log(multiplicationTable(3), [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
]);
