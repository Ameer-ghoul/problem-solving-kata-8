
// Find the position!

// When provided with a letter, return its position in the alphabet.

function position(letter) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // for (let i = 0; i < alphabet.length; i++) {
    //     if (alphabet[i] === letter) {
    //         return `position of alphabet: ${i + 1} `
    //     }
    // }
    
    return `position of alphabet: ${alphabet.indexOf(letter) +1}` 
   
}

console.log(position("c"))