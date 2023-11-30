// 2405. Optimal Partition of String

// Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.


var partitionString = function(s) {
  let charSeen = {}
  let substring = 1;

  for (let i = 0; i < s.length; i++){
      if (charSeen[s[i]]){
          substring++;
          charSeen = {};
      } 
      charSeen[s[i]] = true;
  }
  return substring;

};