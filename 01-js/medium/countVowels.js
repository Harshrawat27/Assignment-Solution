/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let stringWord = str.toLowerCase().split('');
  for (i = 0; i < vowels.length; i++) {
    for (j = 0; j < stringWord.length; j++) {
      if (vowels[i] == stringWord[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

module.exports = countVowels;
