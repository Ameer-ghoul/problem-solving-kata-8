// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards
// , such as madam or racecar.

// convert to string to lowercase
// convert to string to a array
// reverse to the array
// convert into to string
// chrck the given string to the one i created

function isPalindrome(x) {
  return x.toLowerCase() == x.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("madam"));
