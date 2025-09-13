// sigleton or constructor method

const oneUser = new Object(); //defining object
// console.log(oneUser); 

oneUser.id = "123abcd"
oneUser.name ="hitesh"
oneUser.isLoggedIn = false// that how we can give key value pairs to that object

//console.log(oneUser);

//Nesting of objcets (object inside object)
const twoUser ={
    email :"abc@123.com",
    userName:{
        fullName:{
            firstName:"abhishek",
            middleName:"Rajendra",
            lastName:"ganvir"
        }
    }
}
//console.log(twoUser.userName.fullName.middleName); // thats how you can access it.
//combining object 
const obj1 ={ a : 1, b:2, c:3}
const obj2={d:4, e:5, f:6}
const robj = {obj1 , obj2}
//console.log(robj); // this is not the proper way to combine objects
const fobj = Object.assign(obj1,obj2);

//console.log(fobj); // this is the corrrect way Object.assign({}obj1,obj2); you can write also like this good practice.

//also you can use spread like array
const obj3 = {...obj1, ...obj2};
//console.log(obj3); //best and latest

//console.log(Object.keys(obj3)); // you can get all the keys inside object

//console.log(Object.values(obj3)); // same for values.

//console.log(Object.entries(obj3)); // convert every key valur pair in seprate array inside a main array.

//console.log(obj3.hasOwnProperty('d')); // to check whether this property is present or not

//destructuring of object

const deobj ={
    sName:"ankit",
    sAge:21,
    sCourse:"fullstack"
}

//if you have to access the sAge you hav to do
//console.log(deobj.sAge);

const {sAge} = deobj;
console.log(sAge); // you can also access like this
const {sAge:cAge} = deobj;
console.log(cAge); // you can also give different name to key.







