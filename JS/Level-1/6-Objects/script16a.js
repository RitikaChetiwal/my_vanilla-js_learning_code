

// Objects------------------------------------------->
let mydetails={
    fname:'Ritika',
    lname:'Chetiwal',
    age:100,
    salary:200,
    ismarried:false,
    marks:[80,90,100],
    grade:'A',
    task:function (){
        console.log('Programming');
        
    },
    otherDetails:{
        homeTown:'karauli',
        education:'BSc.'
    }
}

// first way to access them: .notation
console.log(mydetails);     //it will print an array type structure of my details.

console.log(mydetails.grade);
console.log(mydetails.salary);

// second way to access them:square notation
// console.log(mydetails[marks]);
// console.log(mydetails[age]);

// for in loop will only be aplly in objects---------
// syntax------------
// for(key in object){
//     console.log(key);
    
// }

for(let key in mydetails){
    console.log(key);
    
}       //it will show all the keys in object.

console.log('*********************************');


for(let key in mydetails){
    console.log(mydetails[key]);
    
}       //it will show the value all keys.

console.log('*********************************');


for(let key in mydetails){
    console.log(key,mydetails[key]);
    
}       //it will the key value pair.

console.log('*******************************');

// how to invoke/fire function in object?
console.log(mydetails.task);        //it will give the definition of function.

console.log(mydetails.task());      //now function will be fired.

mydetails.sex='female';
console.log(mydetails);


// Are objects mutable or immutable(changable or not)?
mydetails.salary=300,
console.log(mydetails.salary);

// Data types: 
// 1.Primitive data type:value
// 2.Non-primitive data type:reference/address/ram address.

// Shallow copy-------------------------------------->
//if we change the values in 1st object then values in 2nd object will also be changed.
let obj1={
    x:100,
    y:200
}

let obj2=obj1;

console.log('before-',obj1);
console.log('before-',obj2);

obj1.z=300;
obj2.z=400;
obj2.a=500;

console.log('after-',obj1);
console.log('after-',obj2);     

console.log('+++++++++++++++++++++++++++++++++++++++++++');


// Deep copy---------------------------------------------->
// if we change the values in 1st object then the values in 2nd object will not be changed.
// 5 ways of writing deep copy.

// 1.spread operator--------------->
let obj11={
    x:100,
    y:200
}
let obj22={...obj11}
console.log('before-',obj11);
console.log('before-',obj22);

obj11.z=300;
obj22.name='Ritika'

console.log('after-',obj11);
console.log('after-',obj22); 

// 2.by using loop(Only for in loop will work in objects) -------------------------------->
let obj3={
    x:100,
    y:200,
}

let obj4={};
console.log('before-',obj3);
console.log('before-',obj4);

for(let key in obj3){
    obj4[key]=obj3[key]
}

console.log('after-',obj3);
console.log('after-',obj4);

obj3.ismarried=false;

console.log('after-',obj3);
console.log('after-',obj4);

// 3.Structure cloning-------------------------------->
let obj5={
    a:100,
    b:200
}

let obj6=structuredClone(obj5)

console.log('before-',obj5);
console.log('before-',obj6);

obj5.c=300;

console.log('after-',obj5);
console.log('after-',obj6);





















