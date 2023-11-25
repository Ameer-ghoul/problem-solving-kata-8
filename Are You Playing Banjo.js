
// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// check the name 
// if the name starts with R or r return " plays banjo" else return "does not play banjo"

function areYouPlayingBanjo(name) {
//    if (name.charAt(0) === "R" || name.charAt(0) === "r") { 
//     return `${name}  plays banjo`
//    } else { 
//     return `${name} does not play banjo`;
//    }

    return name[0] === "R" || name[0] === "r" ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("rami"));