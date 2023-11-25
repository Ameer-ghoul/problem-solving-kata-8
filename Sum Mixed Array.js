// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  // return x.map((n) => Number(n)).reduce((acc, current) => acc + current , 0)
  let arrays = [];
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      arrays.push(Number(x[i]));
    } else {
      arrays.push(x[i]);
    }
  }
  return arrays.reduce((acc, current) => acc + current, 0);
}

console.log(sumMix([1, "2", 3, "5", 5]));
