
// Remove duplicates from list

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.


//creat a function 
// create empty array
// loop through the array

function distinct(a) {
    let resultArr = [];
    for (let i = 0; i < a.length; i++) {
      if (resultArr.indexOf(a[i]) == -1 ) { 
        resultArr.push(a[i])
      }
    }
    return resultArr
}

console.log(distinct([1,1,2]))