// 1984. Minimum Difference Between Highest and Lowest of K Scores

// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.


var minimumDifference = function(nums, k) {
  //sort then sliding window
  nums.sort((a,b) => b - a);

  let left = 0;
  let minDifference = Infinity;

  for (let right = 0; right < nums.length; right++){
      if (right - left + 1 === k){
          let currDiff = nums[left] - nums[right];
          if (currDiff < minDifference){
              minDifference = currDiff;
          }
          left++;
      }
  }

  return minDifference;
};