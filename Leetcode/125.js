// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


var isPalindrome = function(s) {
  let newStr = ""
  for (let i = 0; i < s.length; i++){
    if (s[i].toLowerCase().charCodeAt(0) > 96 && s[i].toLowerCase().charCodeAt(0) < 123 || s[i].charCodeAt(0) > 47 && s[i].charCodeAt(0) < 58){
      newStr+=s[i].toLowerCase()
    }
  }
  for (let i = 0; i < newStr.length/2; i++){
    if (newStr[i] !== newStr[newStr.length-1-i]){
      return false;
    }
  }
  return true;
};


// dont filter out non alphanumeric characters
var isPalindrome2 = function(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right){
      let leftChar = s[left].toLowerCase();
      let rightChar = s[right].toLowerCase();

      if (!(leftChar >= "a" && leftChar <= "z") && !(leftChar >= "0" && leftChar <= "9")){
          left++;
      } else if (!(rightChar >= "a" && rightChar <= "z") && !(rightChar >= "0" && rightChar <= "9")){
          right--;
      } else if (leftChar !== rightChar){
          return false;
      } else {
          left++;
          right--;
      }

  }
  return true;
};