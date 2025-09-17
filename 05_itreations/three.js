let superHeros =["spiderman","Thor", "iron man"] //to access arrays , strings and objects(means that variable) we can use for of loops .
for (const Heros of superHeros) {
    //console.log(`my favourite three superheros are ${Heros}`);
    
}
//map

const myMap = new Map()
myMap.set('IN', "India")
myMap.set('USA', "United states of america")
myMap.set('Fr', "France")

//console.log(myMap); //thats how define map and take values
for (const [key , value] of myMap) {
   // console.log(key);
    
} //if want to print only keys or value

