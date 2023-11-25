// Switch It Up

// When provided with a number between 0-9, return it in words.

function switchItUp(number) {
    switch (number) {
        case 0:
            return "zero";
            break;
        case 1:
            return "one";
            break;
        case 2:
            return "two";
            break;
        case 3:
            return "three";
            break;
        case 4:
            return "four";
            break;
        case 5:
            return "five";
            break;
        case 6:
            return "six";
            break;
        case 7:
            return "seven";
            break;
        case 8:
            return "eghit";
            break;
        case 9:
            return "nine";
            break;

        default:
             return "wrong number";
    }

}
console.log(switchItUp(7));