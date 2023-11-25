// Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// create the result variable
// loop through the given number
// add the number to the array
// return the result

var summation = function (num) {
// let result = 0;
// for (let i = 0; i <= num; i++) { 
//     result += i;
// }
// return result

return Array(num).fill(true).reduce((acc, current, index) => acc + index + 1 , 0);
};

console.log(summation(10));
