// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

//Without using .filter


function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  //array for filtered birds
  let filteredBirds = [];
  
  for (let bird of birds) {
    //variable to keep track if the bird matched a goose
    let matched = false;
    
    //loop through the geese to compare to the bird
    for (let goose of geese) {
      if (bird === goose) {
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      filteredBirds.push(bird);
    }
  }
  
  return filteredBirds;
};