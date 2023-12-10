// 735. Asteroid Collision

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.


var asteroidCollision = function(asteroids) {
  let stack = [];

  //loop through each asteroid
      //if positive, push
      //if negative
          //compare with the values before it
          //pop if the abs value of the negitive num is greater than the positive num
      //push if we reach negative num or the stack is empty

  for (let asteroid of asteroids){
      if (asteroid > 0){
          stack.push(asteroid);
      } else if (asteroid < 0){
          //get the absolute value of the negative asteroids
          let absVal = Math.abs(asteroid);
          //while the last number in the stack is positive,
          //and the curr asteroids value is greater 
          while (stack[stack.length - 1] > 0 && absVal > stack[stack.length - 1]) {
              stack.pop();
          }
          
          //if equal
          if (absVal === stack[stack.length - 1]){
              stack.pop();
          //if the last number is negative or the stack is empty
          } else if (stack.length === 0 || stack[stack.length - 1] < 0){
              stack.push(asteroid)
          }
      }
  }

  return stack;
};