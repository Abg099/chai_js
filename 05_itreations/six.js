//filter map 
// cause map doesnt support return values by storing them into an variable it makes diificult to apply any conditions on them for that we use filter map

const myArr =['2','3','5','6','8']

//const newNum = myArr.filter((values)=>(values >=5))

//console.log(newNum); //implicit return

const newNum = myArr.filter((values)=>{
    return values <=5
})
console.log(newNum);//explicit return
