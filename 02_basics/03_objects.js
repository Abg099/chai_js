//singleton
//Object.create // method to define object using constructor which make single ton we are not learning that one for now.

//object literals
 
const sym = Symbol("key1") // symbol defining

const jsUser ={
    name: "abhi",
    "full Name":"Abhishek ganvir",
    age : 23,
    [sym]:"mykey1", // that's how you give symbol in object
    location :"nagpur",
    email:"abhishekganvir09@gamil.com",
    isLoggedIn:false,
    lastLoginDays:["monday", "friday"]

}  
//console.log(jsUser.email); //that how you can access object

//console.log(jsUser["full Name"]); // you can use this method also as you can see full Name key there you can not access that one with the upper one method.

//console.log(jsUser[sym]); // to access symbol
//console.log(typeof (sym)); // gives an symbol

jsUser.email = "abhsihekganvir0901@gmail.com" // you can change values of object like this.(override)
//console.log(jsUser.email);

//Object.freeze(jsUser) // you can freeze the object no further changes will be applied on this object

//method function inside object

jsUser.greeting = function(){
    console.log("hello js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`); //we can access to object 
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

