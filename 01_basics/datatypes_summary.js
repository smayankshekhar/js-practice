 // primitive 
//  String,Number,Boolean,null,undefined,Symbol,BigInt

//reference (NOn-primitive)

//array,objects,functions

// const outsideTemp="null";
// let Useremail;
// const id=Symbol('123');
// const newId =Symbol('123');
// console.log(id==newId);
// const bigtype=1234n;
// const val='1234';
// console.log(bigtype==val);
// console.log(typeof(id));


//console.log(typeof(bigtype));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory is primitive datatype 
// heap memory is in non-premitive datatype
// let name=mayank;
// let another_name= name;
// name="singh";

// let test1='mayank'
// console.log(test1);

// console.log('hello');
let test1='mayank';
let test2=test1;
test1='shekhar'
console.log(test1);
console.log(test2);


// for heap 
let a={
    userName:"mayank",
    userMail:"smayankshekhar@gmail.com",
    userphone:"23"
}

let b=a;
b.userName='mayank shekhar saingh';
console.log(b.userName);
console.log(a.userName);






