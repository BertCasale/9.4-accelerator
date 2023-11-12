// 2089. Find Target Indices After Sorting Array

// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

//solution 1
var targetIndices = function(nums, target) {
  let targetIndices = [];

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  //binary search to find the value, 
  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < target){
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else if (nums[mid] === target){
      //then loop outward on both sides, unshift and push respectively
          let leftCheck = true;
          let rightCheck = true;
          let firstIndex = mid;
          let lastIndex = mid;
          for (let i = 1; mid - i >= -1 || mid + i <= nums.length; i++){
              if (leftCheck && nums[mid - i] === target){
                  firstIndex = mid - i;
              } else {
                  leftCheck = false;
              }

              if (rightCheck && nums[mid + i] === target){
                  lastIndex = mid + i;
              } else {
                  rightCheck = false;
              }

              if (!leftCheck && !rightCheck){
                  break;
              }
              
          }

          for (let i = firstIndex; i <= lastIndex; i++){
              targetIndices.push(i);
          }

          return targetIndices;
      }   
  }

  return targetIndices;
};

//solution 2
var targetIndices2 = function(nums, target) {
  let targetIndices = [];

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  //binary search to find the first value, 
  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < target){
          left = mid + 1;
      } else if (nums[mid] >= target) {
          right = mid - 1;
      } 
  }
  //first === left
  let firstIndex = left;

  left = 0;
  right = nums.length - 1;
  //binary search to find the last value, 
  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target){
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } 
  }
  let lastIndex = right;

  for (let i = firstIndex; i <= lastIndex; i++){
      targetIndices.push(i);
  }

  return targetIndices;
};