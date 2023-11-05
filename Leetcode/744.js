// 744. Find Smallest Letter Greater Than Target

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.


var nextGreatestLetter = function(letters, target) {
  let left = 0;
  let right = letters.length - 1;

  if (target >= letters[right] || target < letters[left]) {
      return letters[left];
  }

  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      if (letters[mid] <= target){
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return letters[left];
};