const myArr = ["abhi", "pritam", "Himanshu"]
const newArr =["dhiraj", "ashish", "satya"]
//myArr.push(newArr)

//console.log(myArr); // if we try this method to join two arrays it is not going to give us an expected output

//output will be:-[ 'abhi', 'pritam', 'Himanshu', [ 'dhiraj', 'ashish', 'satya' ] ] a array inside array

//to add or concatenate two arrays you should use 

const letArr = myArr.concat(newArr);
//console.log(letArr);
//and the output will be :-[ 'abhi', 'pritam', 'Himanshu', 'dhiraj', 'ashish', 'satya' ]

//spread
//there is another one method which is most used called as spread operator

const allnew =[...myArr, ...newArr]
//console.log(allnew); //going to give same ans as concat

//flat
//if you got layers of array means array inside an array an another array inside it likewise if you want to make it an one array you can use flat

const exArr =[ 1, 2, 3,[ 6, 7, 8,[ 4, 5],9], 10] //like this
const heroArr= exArr.flat(Infinity);
//console.log(heroArr); //output will be 
 // [1, 2, 3, 6,  7,8, 4, 5, 9, 10 ]

  //console.log(Array.isArray("abhi")); // check if it is array or not
  //console.log(Array.from("abhi")); // converts anything to array
  //console.log(Array.from({name:"abhi"})); // in this situation you have tell js that what type of array do want to make value or pair.
  let score1 = 100
  let score2 = 400
  let score3 = 300
  console.log(Array.of(score1,score2,score3)); //converts multiple values into array.
  
  
   


