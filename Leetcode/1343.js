// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.


var numOfSubarrays = function(arr, k, threshold) {
  let left = 0;
  let sum = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++){
      sum+= arr[right];
      if (right - left + 1 === k){
          let avg = sum / k;
          if (avg >= threshold){
              count++;
          }
          sum-= arr[left];
          left++;
      }
  }
  return count;
};