// 905. Sort Array By Parity

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.


var sortArrayByParity = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let current = 0;

  while (current < right){
      if (nums[current] % 2 === 0){
          [nums[current], nums[left]] = [nums[left], nums[current]];
          left++;
          current++;
      } else {
          [nums[current], nums[right]] = [nums[right], nums[current]];
          right--;
      }
  }
  return nums;
};

var sortArrayByParity2 = function(nums) {
  let left = 0;

  for (let i = 0; i < nums.length; i++){
      if (nums[i] % 2 === 0){
          [nums[i], nums[left]] = [nums[left], nums[i]];
          left++;
      } 
  }
  return nums;
};


var sortArrayByParity3 = function(nums) {
  //keep relative order, O(n) space and time
  let evens = [];
  let odds = [];

  for (let i = 0; i < nums.length; i++){
      if (nums[i] % 2 === 0){
          evens.push(nums[i]);
      } else {
          odds.push(nums[i]);
      }
  }
  return evens.concat(odds);
};