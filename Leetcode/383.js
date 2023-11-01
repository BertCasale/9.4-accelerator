//383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

var canConstruct = function(ransomNote, magazine) {
  let magazineCount = {};
  let ransomCount = {};

  for (let letter of magazine) {
      if (magazineCount[letter]){
          magazineCount[letter]++;
      } else {
          magazineCount[letter] = 1;
      }
  }

  for (let letter of ransomNote) {
      if (ransomCount[letter]){
          ransomCount[letter]++;
      } else {
          ransomCount[letter] = 1;
      }

      if (!magazineCount[letter] || ransomCount[letter] > magazineCount[letter]) {
          return false;
      }
  }

  return true;
};