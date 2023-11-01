// 2053. Kth Distinct String in an Array

// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

var kthDistinct = function(arr, k) {
  let strCount = {};
  let uniqueCount = 0;

  for (let str of arr){
      if (strCount[str]){
          strCount[str]++
      } else {
          strCount[str] = 1;
      }
  }

  for (let str of arr){
      if (strCount[str] === 1){
          uniqueCount++
          if (uniqueCount === k){
              return str;
          }
      } 
  }
  return "";
};