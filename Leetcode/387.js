//387. First Unique Character in a String

//Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function(s) {
  //keep track of the count of each letter
  let charCount = {};
  //loop through the string
  for (let i = 0; i < s.length; i++){
      let char = s[i];
      if (!charCount[char]){
          charCount[char] = 1
      } else {
          charCount[char]++
      }
  }
  
  //loop through again and find the first character that appeared once
  for (let j = 0; j < s.length; j++){
      let char = s[j];
      if (charCount[char] === 1){
          return j;
      }
  }

  return -1;
};