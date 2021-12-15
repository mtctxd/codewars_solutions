//src = https://www.codewars.com/kata/60a94f1443f8730025d1744b/train/javascript

function grid(N) {
  // making alphabet string

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // making  perenos

  const perenos = '\n';

  // return '' if N = 0 || return  null if N < 0

  if (N  === 0) {
    return '';
  } else if (N<= 0) {
    return null;
  }

  // make string from alphabet

  // make second string from alphabet  but different by one
}

console.log(grid(0), '');
console.log(grid(1), 'a');
console.log(grid(2), 'a b\nb c');
console.log(grid(4), 'a b c d\nb c d e\nc d e f\nd e f g');
console.log(
  grid(6),
  'a b c d e f\nb c d e f g\nc d e f g h\nd e f g h i\ne f g h i j\nf g h i j k'
);
console.log(grid(-1), null);
console.log(grid(-5), null);
