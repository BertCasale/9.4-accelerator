// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

var wordPattern = function(pattern, s) {
  let patternKey = {};
  let strPattern = {}
  let strArr = s.split(" ");

  if (strArr.length !== pattern.length){
      return false
  }

  for (let i = 0; i < strArr.length; i++) {
      if (!patternKey.hasOwnProperty(pattern[i]) && !strPattern.hasOwnProperty(strArr[i])){
          patternKey[pattern[i]] = strArr[i];
          strPattern[strArr[i]] = pattern[i];
      } else if (patternKey[pattern[i]] !== strArr[i] || strPattern[strArr[i]] !== pattern[i]){
          console.log(patternKey, strPattern)
          return false;
      }
  }
  return true;
};