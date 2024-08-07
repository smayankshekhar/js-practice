
if (true){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);
console.log(c);


function one() {
    const username="mayank";

    function two() {
        const website="youtube";
        console.log(username);
        
        
    }
   // console.log(website);
    two()
}
one()

//hoisting and scope concept

function one(value) {
    return value+1
    
}
console.log(one(1))

console.log(two(2));
const two =function secondfunc(value) {

    return value+3;
    
}
//console.log(two(2));
