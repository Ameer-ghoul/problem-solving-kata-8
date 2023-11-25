// No Zeros For Heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// convert the number to the string
// check if the last index === 0
// remove

function noBoringZeros(n) {
  let stringParame = String(n);
  while (stringParame.endsWith(0)) {
    stringParame = stringParame.slice(0, stringParame.length - 1);
  }
  return Number(stringParame);
}

console.log(noBoringZeros(150000));
