
// Calculate average

// Write a function which calculates the average of the numbers in a given list.

//  Note: Empty arrays should return 0.


// create varibale = 0
// loop through in the array 
// divide the variable to the arra length 

function findAverage(array) {
    // if (array === null || array.length === 0) return 0
    // let variable = 0;
    // for (let i = 0; i < array.length; i++) {
    //     variable += array[i]
    // }
    // let finalresult = variable / array.length
    // return finalresult

    return array.reduce((acc, current) => acc + current,0) / array.length
}

console.log(findAverage([2, 3, 4, 5]))