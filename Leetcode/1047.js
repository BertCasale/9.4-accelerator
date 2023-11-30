// 1047. Remove All Adjacent Duplicates In String

// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.


var removeDuplicates = function(s) {
  let letterArr = [];

  for (let letter of s){
      if (letterArr[letterArr.length - 1] === letter){
          letterArr.pop();
      } else {
          letterArr.push(letter);
      }
  }
  return letterArr.join("");
};