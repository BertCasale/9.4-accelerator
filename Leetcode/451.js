// 451. Sort Characters By Frequency

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.


function frequencySort(s) {
  let freqObj = {}
  let sortedStr = "";
  for (let i = 0; i < s.length; i++){
    let char = s[i]
    if (!freqObj[char]){
      freqObj[char] = 1;
    } else {
      freqObj[char]++;
    }
  }
  let freqArr = Object.entries(freqObj);
  freqArr.sort((a,b) => b[1] - a[1])

  for (let i = 0; i < freqArr.length; i++){
    let char = freqArr[i];
    for (let j = 0; j < char[1]; j++){
      sortedStr += char[0];
    } 
    
  }

  return sortedStr;
}