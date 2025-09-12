const score = 100
//console.log(score)

//console.log(typeof(score)) 
// //here the data type of score is number but if you check on the console it will give undefined to avoid this you have to mekr it strict number.

//use this method for this
const newScore = new Number(1000)
//console.log(newScore)//with the help of this you can use various methods .

const money = new Number(10000000)
//console.log(money.toLocaleString('en-IN'));

//*************MATHS*********************************
//console.log(Math)
//console.log(Math.abs(-8));
//console.log(Math.round(2.006));

//console.log(Math.random());//gives an random value helps to build games like ludo.

//console.log((Math.random()*10) + 1)//it gives an value betw 0 to 1 to avoid value less than 1 we use this formula also we give +1 to avoid situations like 0.0273 where multiplying by 10 will not be enough. also by multiplying ny 10 is shifts the digit to left by one 0.1234 will be 1.234.

//console.log(Math.floor((Math.random()*10) + 1)) // to take precise value without . we use floor

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() *(max - min +1)) + min ); // formula to take numbers between 10 to 20.