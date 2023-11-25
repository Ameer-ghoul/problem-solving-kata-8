// Vowel Remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {
  // let letters = ["a", "e", "i", "o", "u"];
  // let result = [];
  // for (let i = 0; i < string.length; i++) {
  //   if (!letters.includes(string[i])) {
  //     result.push(string[i]);
  //   }
  // }
  // return result.join("");

  return string.replace(/[aeiou]/g, "");
}

console.log(shortcut("ameer"));
