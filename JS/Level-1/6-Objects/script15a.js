

console.log('29th October');

// prompt('enter something here');
// // OR

// let str=prompt('enter your password');
// console.log(str);

// Data types-2:
// 1.primitive--num, string, bigInt, boolean, null, undefined,etc.
// 2.non-primitive--functions,arrays,objects,etc.

// Deep copy
let a=20;
let b=10;
a=b;
b=30;
console.log(a);
console.log(b);

// Shallow copy---------------------------->

let arr1=[112,651,545,684,541]
let arr2=[31,54,64,85,69]
arr1=arr2;
arr2=[151,15,648,84,666]
// console.log(arr1);
// console.log(arr2);

arr1.pop();
console.log(arr1);
console.log(arr2);

// Objects-------------------------->
// it stores the value in the form of key value pair.

let object={
    name:'Ritika',
    age:100,
    education:'BSc.',
    job_role:'Programmer',
    salary:200
}
console.log(object);

console.log(object.name);
console.log(object.education);

// for printing only keys--------------->
for(let key in object){
    console.log(key);
    
}
// <----------------------------OR----------------------------------->
var person=new Object();
person.name='Saurav';
person.age=80;
console.log(person);

console.log(`*******************************************************`);

// An object on Nobita family and friends---------------------------------------->

let Nobita={
    dad:'nobisuke',
    mom:'tamako',
    bestFriend:'doraemon',
    girlFriend:'shizuka',
    otherFriends:{
        friend1:'gian',
        friend2:'suneo',
        friend3:'dekisugi'
    }
}
console.log(Nobita);
console.log(Nobita.bestFriend);
console.log(Nobita.otherFriends);
console.log(Nobita.otherFriends.friend2);

for (let key in Nobita) {
    console.log(key,Nobita[key]);
    
}

console.log(`*************************************************`);

// MG is a British car brand that was founded in 1924 by William Morris: 
// Parent company: MG is owned by SAIC Motor, the world's seventh largest car manufacturer. 
// Design: MG vehicles are designed in Shanghai and London. 
// Production: MG vehicles are manufactured in China, Thailand, India, Indonesia, and Taiwan. 

let carBrandInfo={
    name:'morris garage',
    brandOf:'britain',
    foundedIn:1924,
    founder:'william morris',
    desingnedIn:['shanghai','london'],
    manufacturedIn:{
        country1:'china',
        country2:'thailand',
        country3:'India',
        country4:'taiwan',
        country5:'indonesia'
    }
}
console.log(carBrandInfo);
console.log(carBrandInfo.brandOf);

console.log(carBrandInfo.desingnedIn[0]);
console.log(carBrandInfo.manufacturedIn.country3);










