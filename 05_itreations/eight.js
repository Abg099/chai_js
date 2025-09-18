//.reduce for adding lots of numbers

const myArr = [ 4,6,7,2,7,9 ]

/*const myTotal = myArr.reduce(function(acc, curr ){
    return acc + curr
}, 0) 
console.log(myTotal);*/

//using arrow function

const myTotal = myArr.reduce((acc ,curr)=>acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
