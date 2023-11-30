// 844. Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.


var backspaceCompare = function(s, t) {
  let sStack = [];
  let tStack = [];

  for (let char of s) {
      if (char === "#"){
          if (sStack.length !== 0){
              sStack.pop();
          }
      } else {
          sStack.push(char);
      }
  }

  for (let char of t) {
      if (char === "#"){
          if (tStack.length !== 0){
              tStack.pop();
          }
      } else {
          tStack.push(char);
      }
  }

  if (sStack.join("") === tStack.join("")){
      return true;
  } else {
      return false;
  }
};