// 2433. Find The Original Array of Prefix Xor

// You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// Note that ^ denotes the bitwise-xor operation.

// It can be proven that the answer is unique.


var findArray = function(pref) {
  let ongoingXor = pref[0];
  let values = [pref[0]];
  for (let i = 1; i < pref.length; i++){
      let currentXor = ongoingXor ^ pref[i];
      values.push(currentXor); 
      ongoingXor = ongoingXor ^ currentXor;
  }
  return values;
};