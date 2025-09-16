//there are some conditions where statements dont check if values are true or false they just assumes even just value is present or absent there.

let myemail = "abhi0234" //not a email
if(myemail){
    //console.log("yes"); // so here you can see that without verifying if email is present or not just looking at string value it gave us true.
    
} else{
    //console.log("no");
    
}
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    //console.log("Object is empty");
}

//nullish coalescing operator(??): null undefined
//used to safety check for null values whenever we ask them from database

let val1;
let val2;
val1 = 5 ?? 10;
val2 = null ?? 10;
//console.log(val1);
//console.log(val2);

//same for undefined..

//terniary operator
//condition ? ture:false // syntax
const teaPrice = 40
teaPrice >= 35 ? console.log("expensive") : console.log("normal");



