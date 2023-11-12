// 2226. Maximum Candies Allocated to K Children

// You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.

// You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can take at most one pile of candies and some piles of candies may go unused.

// Return the maximum number of candies each child can get.

var maximumCandies = function(candies, k) {
  //binary, find the min and max number each pile can have
  let min = 0;
  let max = Math.max(...candies);

  while (min <= max){
      //get middle value
      let mid = Math.floor((min + max) / 2);

      //count how many piles can be made using the mid value as the pieces in each pile
      let pileCount = 0;
      for (let candy of candies){
          pileCount += Math.floor(candy/mid);
      }

      //if there are more piles than kids, increase the min, or decrease max if less piles than kids
      if (pileCount >= k){
          min = mid + 1;
      } else {
          max = mid - 1;
      }
  }
  //return the max amount
  return max;
};