// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

///////IN PROGRESS

function incrementString (strng) {
  let strArr = strng.split("");
  let incrementedString = "";
  let numArr = [];
  
  //if the last character isnt a number
  if (strng[strng.length - 1] < "0" || strng[strng.length - 1] > "9") {
    strArr[strArr.length] = 1;
    incrementedString = strArr.join("");
  } else {
    //take the numbers from the end and put in a new array
    let counter = strArr.length - 1;
    while (strArr[counter] >= "0" && strArr[counter] <= "9"){
      numArr.unshift(strArr[counter]);
      strArr.splice(-1, 1)
      counter--
    }
    
    for (let i = numArr.length - 1; i >= 0; i--){
      if (numArr[i] == "9"){
        numArr[i] = "0";
        
        if (i == "0") {
          numArr.unshift("1");
        }
        
      } else {
        numArr[i]++;
        break;
      }
    }
    incrementedString = strArr.join("") + numArr.join("")
  }
  
  return incrementedString;
}
