//For every good kata idea there seem to be quite a few bad ones!

//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
  //track the number of "good" ideas
  let goodCount = 0;
  
  //loop through the array x
  for (let idea of x){
    //increment the goodCount when theres a "good" idea
    idea === "good" ? goodCount++ : null;

    //if theres more than 2 good ideas, return message, ending the loop early
    if (goodCount > 2) {
      return "I smell a series!"
    }
  }
  
  //return the approprate message based on the number of "good" ideas
  if (goodCount > 0){
    return "Publish!";
  } else {
    return "Fail!"
  }
}

//O(n) time  O(1) space