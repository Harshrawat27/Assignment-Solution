/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let decision = false;
  let neutralisedString = str
    .replace(/[\s\W]/g, '')
    .toLowerCase()
    .split('');

  if (str.length <= 1) {
    return true;
  }
  for (let i = 0; i < neutralisedString.length / 2; i++) {
    if (
      neutralisedString[i] ==
      neutralisedString[neutralisedString.length - 1 - i]
    ) {
      decision = true;
    } else {
      return false;
    }
  }

  return decision;
}

let test = isPalindrome('madam1');
console.log(test);

module.exports = isPalindrome;

module.exports = isPalindrome;
