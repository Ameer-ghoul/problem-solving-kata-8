// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd(number) { 
//  return number % 2 === 0 ? "even" : "odd";

    if(number % 2 === 0) { 
        return "even"
    } else { 
        return "odd"
    }

}
console.log(evenOdd(8));

