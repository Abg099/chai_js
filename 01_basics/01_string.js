//concatenate
const name ="hitesh"
const age = 34

//console.log( name + age +"hello") //thats how you can concatenate your string but this is old syntax advised not to used.
console.log(`my name is ${name} and my age is ${age}`); //this is the modern way that we can use to concatenate string

//we can define string by one more way that :-
const newGame = new String('last of us')
console.log(newGame) //this synatx gives you same result on code editor but if you write this on console it will give you an index cause it will be an object also lots of methods of strings.
//example
console.log(newGame[2]) // we can access to any index.
console.log(newGame.toUpperCase()) 
//there are lots of methods to be discovered.