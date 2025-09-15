//Immediately Invoked Function Expressions(IIFE)
//to avoid global scope pollution of unknown variables and to immediate execution of function we use iife.

//function chai(){
    //console.log("yes we are there");
//}
//chai() //simple way

(function chai(){
    //named iife
    console.log("yes we are there");
})(); //iifem ; is important

((name) =>{
    console.log(`${name} is btech graduate`);
    
})("abhishek")

