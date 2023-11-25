// Count by X

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// create newArray
// loop through n
// multiples x * n 
// add the number to the new array 
// return the new array


function countBy(x, n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) { 
    newArray.push(x * i)
  }
  return newArray;

    
  }
  console.log(countBy(1,10))