const myNumber = 42;

const myFloat = 42.01;

const myString = "42.23";

console.log(myNumber === myFloat) //false
console.log(myString + 3); //returns "423" string


//Number() changes a string of numbers into an int
console.log(Number(myString));
console.log(Number(myString) + 3); //returns 45
console.log(Number(myString));
console.log(Number("Dave")); // returns NaN, also returns NaN if variable is not defined
console.log(Number(true)); // returns 1
console.log(Number(false)); // returns 0

//Number.isInteger() returns true if argument is and interger or false if not
console.log(Number.isInteger(myString)); //false
console.log(Number.isInteger(myNumber)); //true

//Number.parseFloat(): takes a float as a string and converts it to a float variable, float has
// string has to start with the float
console.log(Number.parseFloat(myString));

//.toFixed(): fixes the amount of numbers that come after the decimals and rounds. returns a string
console.log(myFloat.toFixed(1));

//Number.parseInt(): takes a int as a string and converts it to a int variable, string has to start with the int
console.log(Number.parseInt(myString));

//.toString(): converts ints and floats to strings
console.log(typeof myFloat.toString())

//Number.isNaN(): returns true if an integer agrument is NaN or false otherwise
console.log(Number.isNaN("Dave")) //returns false 
console.log(Number.isNaN(NaN)) //returns true 



