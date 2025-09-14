// basically we have three keywords let , var, const we dont use var for a reason that :- there are two tpyes of scopes one is global scope and second is block scope 
//if you write something inside block scope it doesnt have to be come outside until it is given an return .
// but the problem with var is that it gets executed outside of block scope without return.

//scope level
if(true){
    const username ="hitesh"
    if(username === "hitesh"){
        const webSite =" youtube"
       // console.log(username + webSite); //getting executes inside scope also child scope can access parent scope.
        
    }
    //console.log(webSite);// not gonna execute out of scope

    
}
//console.log(username);// not gonna execute out of scope
//console.log(addOne(5));  // in this case you can access value
function addOne(num1){
 return num1 + 1
}

//console.log(addTwo(5)); // in this case you can access value before declaration
const addTwo = function(num){
    return num+ 2
}

