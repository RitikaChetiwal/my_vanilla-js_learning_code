

// 11th October-------------

// Prime number...
// to find whether the number is prime or not?
// num=7,
// 7%1=0,factor++
// 7%2,
// 7%3,
// 7%4,
// 7%5,
// 7%6,
// 7%7;
// if the number of factors are 2, num is prime
// otherwise if the number of factors more than 2, num is not prime.

// APPROACH-1--------------->

// let num=7;
// let nof=0;
// for(let div=1;div<=num;div++){
//     if(num%div==0){ 
//         nof++;
//     }

// }
// if(nof>2){
//     console.log("not prime");

// }else{
//     console.log("prime");

// }

// APPROACH-2a-------------->\

// let num=7;
// let nof=0;
// for(let div=2;div<=num-1;div++){
//     if(num%div==0){
//         nof++;
//     }
// }
// if(nof>0){
//     console.log("not prime");
// }else{
//     console.log("prime"); 
// }

// APPROACH-2b-------->

// let num=7;
// let nof=0;
// for(let div=2;div<=num-1;div++){
//     if(num%div==0){
//     nof++;
//     break;
//     }
// }
// if(nof>0){
//     console.log("not prime");

// }else{
//     console.log("prime");

// }

// APPROCH-3a---------->
// by the square root or approximate square root of number.

// let num=7;
// let nof=0;
// for(let div=2;div*div<=num;div++){
//     if(num%div==0){
//         nof++;
//     }
// }
// if(nof>0){
    // console.log("not prime");

// }else{
//     console.log("prime");

// }

// APPROACH-3b------------->

let num=7;
let nof=0;
for(let div=2;div*div<=num;div++){
    if(num%div==0){
        nof++;
        break;
    }
}
if(nof>0){  
        console.log("not prime");

    }else{ 
        console.log("prime");

    }

// Approaches---
// 1-100--------->100 times run
// 2-(num-1)------------>98 times run
// 2-10{div*div<=num}------------>9 times
// 
// Prime in Range---------------------------------------->
// Approach-a
// let sn=1;
// let en=30;
// for(let num=sn;num<=en;num++){
//     let nof=0;
//     for(let div=2;div*div<=num;div++){
//         if(num%div==0){
//             nof++;
//             break;
//         }
//     }
//     if(nof>0){ 
//         console.log(num,"not prime");
        
//     }else{
//         console.log(num,"prime");
        
//     }
// }

// // Approch-b

// let sn=1;
// let en=30;
// for(let num=sn;num<=en;num++){
//     if(num==1){
//         continue;
//     }
//     let nof=0;
//     for(let div=2;div*div<=num;div++){
//         if(num%div==0){
//             nof++;
//             break;
//         }
//     }
//     if(nof>0){ 
//         console.log(num,"not prime");
        
//     }else{
//         console.log(num,"prime");
        
//     }
// } 

// More efficient version-------------------------------->
let fn=1;
let ln=30;
for(let num=fn;num<=ln;num++){
    if(num==1){
        console.log(num,"not prime");
        continue;
    }
    let isNotPrime=false;
    for(let div=2;div*div<=num;div++){
        if(num%div==0){
            isNotPrime=true;
            break;
        }
    }
    console.log(num,isNotPrime?"not prime":"prime");
}




