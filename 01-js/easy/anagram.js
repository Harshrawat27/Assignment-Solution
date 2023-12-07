/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Normalize and sort the characters in both strings
  if (str1.length == str2.length) {
    var normalizedStr1 = str1.toLowerCase().split('').sort().join('');
    var normalizedStr2 = str2.toLowerCase().split('').sort().join('');

    // Compare the sorted strings
    return normalizedStr1 === normalizedStr2;
  } else {
    return false;
  }
}

let newarray1 = (module.exports = isAnagram);
