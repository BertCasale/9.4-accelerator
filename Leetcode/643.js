// 643. Maximum Average Subarray I

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.


var findMaxAverage = function(nums, k) {
  //variable for the start of our window
  let left = 0;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++){
      //add each number to the sum
      sum += nums[i];
      //when we reach k (the number of elements in the window)
          //subtract the left value (beginning value) from the sum
      if (i >= k){
          sum -= nums[left];
          left++;
      }

      //only calculate the max once we reach k number of elements
      if (i - left + 1 === k){
          if (sum > max){
              max = sum;
          }
      }
  }

  return max / k;
};

//cleaned up
var findMaxAverage2 = function(nums, k) {
  let left = 0;
  let max = -Infinity;
  let sum = 0;

  for (let right = 0; right < nums.length; right++){
      sum += nums[right];

      if (right - left + 1 === k){
          if (sum > max){
              max = sum;
          }
          sum -= nums[left];
          left++;
      }
  }

  return max / k;
};