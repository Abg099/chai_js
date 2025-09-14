function myName(){ //basic syntax
console.log("hello");
console.log("abhishek");
console.log("here");
}
//myName()

//function addTwo(number1, number2){
 //console.log(number1 + number2);
 //}

//addTwo(3 , 4)

//function addTwo(number1, number2){
 
 //console.log(number1 + number2);
//}
//const result = addTwo(3 , 4)
//console.log(result); //in this way it will return the value but not gonna print through console .
function addTwo(number1, number2){
 
 //let result =number1 + number2
 //return result
 
 //console.log("hitesh");//not going to execute cause after return no further execution. if you want execute write it before result.
 return number1+number2 // you also can write like this.saves lines of code
 
}
//const result = addTwo(3 , 4)
//console.log("Result:",result); //now it going to print

function login(username){
return `${username} is logged in`
}

//console.log(login("hitesh")); //some ways of taking input from user

//checking user input given or not
function login(username){
    if(username === undefined){
    //console.log("please enter a username");
    return
    } 
return `${username} is logged in`
}

//console.log(login());

//to calculate multiple values 
function calculateCartPrice(...num1){ // using an rest operator (...) the rest is telling that values are spreaded make it in group.
 return num1
}
//console.log(calculateCartPrice(200, 400, 600));

//how to pass a object in function
const myUser = {
 username:"gullyBoy",
price: 12637
}
function handleObject(anyObjcet){
 console.log(`username is ${anyObjcet.username} and price is ${anyObjcet.price}`);
 
}
//handleObject(myUser)
//handleObject({
    //username:"cris",
    //price:899
//}) //you can pass objcet like this also no need to first create object.

//passing array to function

const myNewArray = [ 129, 3637, 738]

function passingArray(getArray){
  return getArray[2]
}
//console.log(passingArray(myNewArray));
console.log(passingArray([200 , 4778, 3838, 848])); //you can give array here also


 