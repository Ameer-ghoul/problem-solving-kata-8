// Double Char
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


// change the string to the array
// loop through the array
// repeat the each element once 
// return the array into string 

function doubleChar(str) {
  return str.split("").map((e) => e.repeat(3)).join("")

}

console.log(doubleChar("ameer"));
