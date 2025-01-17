//return a random letter from any given name

let myName = "Yeamelack"
console.log(myName.charAt(Math.floor((Math.random()*myName.length-1)) + 1));
