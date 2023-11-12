// 53. Maximum Subarray

// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

var maxSubArray = function(nums) {
  let currentSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++){
    currentSum += nums[i];

    if (currentSum > maxSum){
      maxSum = currentSum;
    }

    if (currentSum < 0){
      currentSum = 0;
    }
  }
  return maxSum;
};