// when object willl be from constructor the singleton object else no singleton
// Object.create{}
//object literals
const User={
    name:"mayank",
    surname:"singh",
    contact:"1234567890"
}

console.log(User["name"]);

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="mayank"
tinderUser.isLoggedin=false


//combination of two objects
const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}


//object destructruing 
console.log(obj3,"objects 3")
const {3:vb}=obj2
console.log(vb);

