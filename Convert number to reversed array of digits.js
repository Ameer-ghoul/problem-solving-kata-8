// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


// change the number to the string 
// split the string to an array 
// change the string in the array to numbers 
// revers the array 

function digitize(n) {
    return n
    .toString()
    .split("")
    .map((m) => Number(m))
    .reverse()
}

console.log( digitize(123456789))



  