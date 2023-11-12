// 2187. Minimum Time to Complete Trips

// You are given an array time where time[i] denotes the time taken by the ith bus to complete one trip.

// Each bus can make multiple trips successively; that is, the next trip can start immediately after completing the current trip. Also, each bus operates independently; that is, the trips of one bus do not influence the trips of any other bus.

// You are also given an integer totalTrips, which denotes the number of trips all buses should make in total. Return the minimum time required for all buses to complete at least totalTrips trips.


var minimumTime = function(times, totalTrips) {
  //binary search using the min time
  //max is the shortest time x the total number of trips 
  let min = Math.min(...times);
  let max = min * totalTrips;

  while (min < max){
      //get midpoint
      let mid = Math.floor((min + max) / 2);

      //keep track of the possible trips
      let tripsCompleted = 0;
      for (let time of times){
          tripsCompleted += Math.floor(mid / time);
      }

      //if there were more trips than needed, move min
      if (tripsCompleted >= totalTrips){
          max = mid;
      } else {
          min = mid + 1;
      }
  }
  return max
};