// 697. Degree of an Array

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.


var findShortestSubArray = function(nums) {
  let numCount = {}
  let degree = 0;
  let numFirstIndex = {};
  let smallestLength = 0;

  for (let i = 0; i < nums.length; i++){
      let num = nums[i];

      //count each number in the array
      if (!numCount[num]){
          numCount[num] = 1;
          numFirstIndex[num] = i;
      } else {
          numCount[num]++;
      }

      //keep track of the highest frequency number, and the smallest length
      if (numCount[num] > degree){
          degree = numCount[num];
          smallestLength = i - numFirstIndex[num] + 1;
      } else if (numCount[num] === degree) {
          if (smallestLength > i - numFirstIndex[num]) {
              smallestLength = i - numFirstIndex[num] + 1;
          }
      }
  }
  
  return smallestLength;

};