

// Promises-------------------------------------------->

// pending promise statement------------->

const promise1 = new Promise((resolve,reject)=>{

})
console.log(promise1)       //the state of promise is pending.

// Resolved statement------------------->

const promise2 = new Promise((resolve,reject)=>{
    resolve('problem solved')
})
console.log(promise2);      //promise state fulfilled now.

promise2.then((solved)=>{
    console.log(solved)
    
})

// Reject statemnt------------------>

const promise3 = new Promise((resolve,reject)=>{
    reject('problem not solved')
})
console.log(promise3);

promise3.catch((error)=>{
    console.log(error);
    
})

// we can use multiple then function but not catch functions for now.

// Multiple resolve------------------------------------------>

////////////////////////////////////////////////////////////////////////

const promise4 = new Promise((resolve,reject)=>{
    resolve('solution')
})
console.log(promise4);

// by chaining of then function---------------

promise4.then((hulk)=>{
    console.log(hulk);
    
}).then((nat)=>{
    console.log(nat);
    
}).then((tony)=>{
    console.log(tony);
    
})

