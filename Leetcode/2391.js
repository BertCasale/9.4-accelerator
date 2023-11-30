// 2391. Minimum Amount of Time to Collect Garbage

// You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.

// You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.

// There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.

// Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.

// Return the minimum number of minutes needed to pick up all the garbage.


var garbageCollection = function(garbage, travel) {

  //make an object to save the last location of each garbage, and total time, and an array to track the accumulated time for each stop

  //loop through each house (i)
      //loop through and count the garbage for each type, add 1 to total and save the index (i) of the last seen location

  //add the accumulated time at each saved garbage index to the total

let garbObj = {};
let accumTravelTime = [0];
let totalTime = 0;


for (let i = 0; i < travel.length; i++){
  let time = accumTravelTime[i] + travel[i];
  accumTravelTime.push(time);
}

for (let i = 0; i < garbage.length; i++){
  let house = garbage[i];
  for (let j = 0; j < house.length; j++){
      let trashType = house[j]
      totalTime++;
      garbObj[trashType] = i;
  }
}

for (let trash in garbObj){
  let house = garbObj[trash];
  totalTime+= accumTravelTime[house]
}

return totalTime;

};