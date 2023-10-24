//2114. Maximum Number of Words Found in Sentences

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.


var mostWordsFound = function(sentences) {
  //keep track of the highest number of words in one sentence
  let maximumWordCount = 0;
  //loop through the sentence
  for (let sentence of sentences) {

    //find the word count of each sentence
    let sentenceLength = sentence.split(" ").length
    //if the sentence has more words than the current highest, then its the new maximum word count
    if (maximumWordCount < sentenceLength) {
        maximumWordCount = sentenceLength;
    }
  }
  return maximumWordCount
};

//O() time  O(1) space