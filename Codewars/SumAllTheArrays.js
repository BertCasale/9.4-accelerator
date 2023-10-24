// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

//dont use .flat

function arraySum(arr) {
  let total = 0;
  
  for (let elem of arr){
    if (Array.isArray(elem)){
      total += arraySum(elem)
    } else if (typeof(elem) === "number"){
      total += elem
    }
  }
  
  return total;
}