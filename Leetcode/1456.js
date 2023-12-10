// 1456. Maximum Number of Vowels in a Substring of Given Length

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.


var maxVowels = function(s, k) {
  //sliding window
  let vowels = "aeiou";
  let left = 0;
  let currCount = 0;
  let maxCount = 0;

  //loop through, using sliding window
  for (let right = 0; right < s.length; right++){
      if (vowels.includes(s[right])){
          currCount++;
      }

      if(currCount === k){
          return currCount;
      }

      if (right - left + 1 === k){

          if (currCount > maxCount){
              maxCount = currCount;
          }

          if (vowels.includes(s[left])){
              currCount--;
          }
          left++;
      }

  }

  return maxCount;
};