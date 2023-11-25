
// Filter out the geese

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the
//  'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = birds.filter((bird) => { 
    return !geese.includes(bird)
  })
    return result
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
