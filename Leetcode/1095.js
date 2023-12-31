// 1095. Find in Mountain Array

// (This problem is an interactive problem.)

// You may recall that an array arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

// You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

// MountainArray.get(k) returns the element of the array at index k (0-indexed).
// MountainArray.length() returns the length of the array.
// Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.


/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
  let left = 0;
  let right = mountainArr.length();
  let peakIndex = -1;
  let targetIndex = -1;

  //binary search to find the peak
  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      let midValue = mountainArr.get(mid);
      let leftMidValue = mountainArr.get(mid - 1);
      let rightMidValue = mountainArr.get(mid + 1)

      if (midValue > leftMidValue && midValue > rightMidValue){
          //if (peak is less than target) return -1
          if (midValue < target){
              return targetIndex;
          }

          peakIndex = mid;
          left = right + 1;
      } else if (midValue < leftMidValue){
          right = mid - 1;
      } else if (midValue < rightMidValue){
          left = mid + 1;
      }
  }

  //binary on the left side
  left = 0;
  right = peakIndex;
  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      let midValue = mountainArr.get(mid);

      if (midValue === target){
          targetIndex = mid;
          right = mid - 1;
      } else if (midValue > target){
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  //binary on the right side
  if (targetIndex === -1){
      left = peakIndex;
      right = mountainArr.length();
      while (left <= right){
          let mid = Math.floor((left + right) / 2);
          let midValue = mountainArr.get(mid);

          if (midValue === target){
              targetIndex = mid;
              right = mid - 1;
          } else if (midValue < target){
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
  }

  return targetIndex;
};