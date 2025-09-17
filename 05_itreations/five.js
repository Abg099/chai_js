//using for each loop for array

const myArr = ["hello","hii","bye"]
myArr.forEach(function (greet){
    //console.log(greet);
    //we have to give call back function here.
})
//using arrow function
myArr.forEach((num)=>{
//console.log(num);

})
//for each doesnt only give values it can more than that like :-
myArr.forEach((value, index,arr)=>{
//console.log(value, index,arr);

})

//applying for each loop over object inside the array

const newArr =[
    {
        lName:"javascript",
        lExtn:"js"
    },
    {
        lName:"phyton",
        lExtn:"py"
    },
    {
        lName:"java",
        lExtn:"java"
    },
]

newArr.forEach((item)=>{
console.log(item.lName);

})
