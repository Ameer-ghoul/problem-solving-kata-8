// Beginner - Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// create variable = 1
// loop through in the array
// add the Multiplication number to the variable
// return the result

function grow(x) {
  //   let result = 1;
  //   for (let i = 0; i < x.length; i++) {
  //     result *= x[i];
  //   }
  //   return result;

  return x.reduce((acc, current) => acc * current, 1);
}

console.log(grow([1, 2, 3, 4]));
