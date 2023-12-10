// 2287. Rearrange Characters to Make Target String

// You are given two 0-indexed strings s and target. You can take some letters from s and rearrange them to form new strings.

// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.


var rearrangeCharacters = function(s, target) {
  let maxWords = Infinity;
  let targetCount = {};
  let sCount = {};

  for (let letter of target){
      if (!targetCount[letter]){
          targetCount[letter] = 1;
      } else {
          targetCount[letter]++;
      }
  }

  for (let letter of s){
      if (targetCount[letter]){
          if (!sCount[letter]){
              sCount[letter] = 1;
          } else {
              sCount[letter]++;
          }
      }
  }

  for (let letter of target){
      if (!sCount[letter]){
          return 0;
      }

      let possibleWords = Math.floor(sCount[letter] / targetCount[letter]);
      if (possibleWords < maxWords){
          maxWords = possibleWords;
      }
  }
  
  return maxWords;
};