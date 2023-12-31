
// Character Recognition

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited,
//  searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make 
// mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

function correct(string)
{
	return string.replace(/0/g, "o").replace(/1/g, "i").replace(/s/g, "s")
}
console.log(correct("l0nd0n"));