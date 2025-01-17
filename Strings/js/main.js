const myVariable = "Mathematics"

//length of the string
console.log(myVariable.length);
console.log("poop cock".length);


//charAt: returns letter at given index 0-n
console.log(myVariable.charAt(0));

//indexOf: returns the index of the first occurrence of substring (case sensitive)
console.log(myVariable.indexOf("at"));

//lastIndexOf: returns the index of the last occurrence of the substring (case sensitive)
console.log(myVariable.lastIndexOf("at"));

//slice: returns the the string in between the arguments (exclusive)
console.log(myVariable.slice(0, 4)); 

//toUpperCase: turns a string to call caps
console.log(myVariable.toUpperCase());

//includes: checks if substring exists
console.log(myVariable.includes("mat"));

//split: splits string everywhere the entered string is occurs, with the given letter no longer in final array
console.log(myVariable.split("e")) //returns an array


