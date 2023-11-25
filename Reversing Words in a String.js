
// Reversing Words in a String


// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// change string to array 
// reverse the array 
// change array to the string

function reverse(string) {
   return string.split(" ").reverse().join(" ")
    
}

console.log(reverse("ameer ghoul"))