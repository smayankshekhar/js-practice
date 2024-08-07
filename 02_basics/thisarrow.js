console.log(this);

function ex(a) {
    console.log(this);
    
    
}
ex()


// this keyword will not work in function
 //for ex

 function jai(a) {
    let username="mayank"
    console.log(this.username);
    
    
}
jai()

const user= () =>{
    let username="mayank"
    console.log(this.username);
}
user()

const addTwo=(num1,num2) => {

    return(num1+num2)

}
console.log(addTwo(1,2));

//implicit retrun 

const sum=(num1,num2)=>(num1+num2);
console.log(sum(4,7));





