//for in loop
//used for objects because for of loop dont works for objects also for array

const myObj ={
    MI : "mumbai indians",
    csk :"chenai superkings",
    GT :"gijrat titans"
}

for (const key in myObj) {
   console.log(`${key} is shortform of ${myObj[key]}`);
   
}
//thats how we use for in loops for objects we can use for array
