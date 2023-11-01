// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


var isAnagram = function(s, t) {
  let sLetterCount = {}
  let tLetterCount = {}

  if (s.length !== t.length){
      return false;
  }

  for (let i = 0; i < s.length; i++){
      if (!sLetterCount[s[i]]){
          sLetterCount[s[i]] = 1;
      } else {
          sLetterCount[s[i]]++;
      }

      if (!tLetterCount[t[i]]){
          tLetterCount[t[i]] = 1;
      } else {
          tLetterCount[t[i]]++;
      }
  }

  for (letter of s) {
      if (sLetterCount[letter] !== tLetterCount[letter]){
          return false
      }
  }

  return true;
};