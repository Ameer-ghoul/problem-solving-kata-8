// Count of positives / sum of negatives

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.



// create empty array for the positive number 
// create a variable for the sum nigative number 
// loop through the giver array 
// check of the number is posiive add the array , if negative add to the sum variable


function countPositivesSumNegatives(input) {

let positiveArray = input.filter((x) => x > 0).length
let sumNigative = input.filter((x) => x < 0).reduce((acc, current) => acc + current , 0)
return [positiveArray, sumNigative]

    // let positiveArray = [];
    // let sumNigative = 0;
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] > 0) {
    //         positiveArray.push(input[i]);
    //     } else {
    //         sumNigative += input[i];
    //     }

    // }
    // return [positiveArray.length, sumNigative];
}

console.log(countPositivesSumNegatives([1, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));