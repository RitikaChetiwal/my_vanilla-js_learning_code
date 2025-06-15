// const promise3 = new Promise((resolve,reject)=>{
//     resolve('solved')
//     reject('problem not solved')
// })
// console.log(promise3);

// promise3.then((solved)=>{
//     console.log(solved);
    
// }).catch((err) => {
//     console.log(err);
    
// })


const promise4 = new Promise((resolve,reject)=>{
    resolve('solution')
    reject('no solution')
})
console.log(promise4);


promise4.then((hulk)=>{
    console.log(hulk);
    
}).then((nat)=>{
    console.log(nat);
    
}).catch((err) => {
    console.log(err);
    
})
