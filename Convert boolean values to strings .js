
// Convert boolean values to strings 

// Convert boolean values to strings "yes" ot "no"

// check if the argument , if true return "yes" , if false return "no"
function boolToWord(bool) {

    // if (bool == true) {
    //     return "yes"
    // } else {
    //     return "no"
    // }

//    return bool == true ? "yes" : "no"

return bool ? "yes" : "no"

}

console.log(boolToWord(true))