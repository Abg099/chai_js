let myArr = [0, 1, 5, 8, 3] // define array
//console.log(myArr[2]); //you can access array this way

let newArr = new Array(1 , 4, 5, 7) // you can define array in this way also

//myArr.push(9) //to add any value to array

//console.log(myArr);
//console.log(myArr.length); // length of array

//myArr.pop() // removes the last element of array

myArr.unshift(3) // add elements in the starting of array
//console.log(myArr);
myArr.shift()//removes the first value of array

let aArr = myArr.join() //converts to strings
//console.log(myArr);
//console.log(aArr);

//slice
let xArr = myArr.slice(1 , 3) // it give an section of array on the basis of given index . doesnt include last given index.
console.log(xArr);
console.log(myArr);

//splice

let yArr = myArr.splice(1 , 3) // works same as slice but includes last index also but it is not the major difference. It also manipulates the array and it takes the values out of array of given index. 
console.log(yArr);
console.log(myArr);







