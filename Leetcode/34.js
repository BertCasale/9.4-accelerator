// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let firstLast = [-1,-1];

  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target){
          right = mid - 1;
      } else {
          left = mid + 1;
      }
      if (nums[mid] === target){
          firstLast[0] = mid;
      }
  }
  
  right = nums.length - 1;
  
  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target){
          left = mid + 1;
      } else {
          right = mid - 1;
      }
      if (nums[mid] === target){
          firstLast[1] = mid;
      }
  }
  
  return firstLast
};