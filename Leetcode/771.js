//771. Jewels and Stones

//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

//Letters are case sensitive, so "a" is considered a different type of stone from "A".


var numJewelsInStones = function(jewels, stones) {
  //save the jewels in an object
  let jewelsObj = {};
  let total = 0;
  //loop through jewels first
  for (let i = 0; i < jewels.length; i++) {
      jewelsObj[jewels[i]] = true;
  }
  //loop through the stones, and add them to the jewel count
  for (let i = 0; i < stones.length; i++){
      if (jewelsObj[stones[i]]){
          total++;
      }
  }
  return total;
};