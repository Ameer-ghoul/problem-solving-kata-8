// To square(root) or not to square(root)
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

// create newArray
// loop through the array
// check the number has an integer square root or not 
// if true take the root , if false square the number 
// return the new array

function squareOrSquareRoot(array) {
    // let newArray = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (Number.isInteger(Math.sqrt(array[i]))) {
    //         newArray.push((Math.sqrt(array[i])))
    //     } else {
    //         newArray.push(array[i] * array[i])
    //     }
    // }
    // return newArray

    return array.map((number) => Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number * number);

}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
