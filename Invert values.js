
// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// create new array 
// loop through array 
// inverse the numbers 
// return new array 

function invert(array) {
    // let newArray = [];
    // for (let i = 0; i < array.length; i++) { 
    //     newArray.push(array[i] * -1);
    // }
    // return newArray;

    return array.map((x) => x * -1 )
 }

 console.log(invert([-1, -2, -3, -4]))