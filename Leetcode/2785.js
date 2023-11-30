// 2785. Sort Vowels in a String

// Given a 0-indexed string s, permute s to get a new string t such that:

// All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
// The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].
// Return the resulting string.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.


var sortVowels = function(s) {
  //make a separate array for vowels
  //loop through string, push vowels into array
  //sort the vowels array
  //loop through string again and make a new string with each character, replacing the vowels with the sorted ones in the array
  let vowelsFound = [];
  let newStr = "";
  let vowels = "aeiou"

  for (let i = 0; i < s.length; i++){
      let char = s[i].toLowerCase();
      if (vowels.includes(char)){
          vowelsFound.push(s[i]);
      }
  }

  vowelsFound.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))

  let vowelCount = 0;
  for (let char of s){
      if (vowels.includes(char.toLowerCase())){
          newStr+= vowelsFound[vowelCount];
          vowelCount++;
      } else {
          newStr+= char;
      }
  }

  return newStr;
};