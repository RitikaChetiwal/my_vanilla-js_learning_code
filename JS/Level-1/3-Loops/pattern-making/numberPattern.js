

// Number patterns---------------------------->

// * 
// * * 
// * * * 
// * * * *
// * * * * *

for(row=1;row<=5;row++){
  for(st=1;st<=row;st++){
    process.stdout.write("* ")
  }
  console.log();
  
}

// ------------------------------

// 1
// 12
// 123
// 1234
// 12345

for(let row = 1;row <= 5;row++){
    let ans="";
    let val=1;
    for(let st=1;st<=row;st++){
        ans=ans+val;
        val++;
    }
    console.log(ans);
    
  }

// -------------------------------

// Q1.
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// let val=1;
// for(let row=1;row<=5;row++){
//     let ans="";
//     for(let st=1;st<=row;st++){
//         ans=ans+val;
//     }
//     console.log(ans);
//     val++;
//   }

// ------------------------

// 54321
// 5432
// 543
// 54
// 5 


// for(let row=1;row<=5;row++){
//     let ans="";
//     let val=5;
//     for(let st=1;st<=5-row+1;st++){
//         ans=ans+val;
//         val--;
//     }
//     console.log(ans);    
// }

// -------------------------

// Q2.
// 5 5 5 5 5
// 4 4 4 4
// 3 3 3 
// 2 2
// 1

// let val=5;
// for(let row=1;row<=5;row++){
//     let ans="";
//     for(let st=1;st<=5-row+1;st++){
//         ans=ans+val;
//     }   val--;
//     console.log(ans);
    
// }
// ------------------------

// * * * * *
//   * * * * 
//     * * * 
//       * *
//         * 

// let nsp=0;
// let nst=5;
// for(row=1;row<=5;row++){
//     for(sp=1;sp<=nsp;sp++){
//         process.stdout.write("  ")
//     }for(st=1;st<=nst;st++){
//         process.stdout.write("* ")
//     }
//     console.log();
//     nsp=nsp+1;
//     nst=nst-1;
    
// }

// ---------------------------------------
// 1 2 3 4 5
//   1 2 3 4 
//     1 2 3
//       1 2
//         1

let nsp=0;
let nst=5;
for (let row=1;row<=5;row++){
    let ans="";
    for(sp=1;sp<=nsp;sp++){
        ans=ans+" ";
    }for(let st=1; st<=nst;st++){
        ans=ans+st;
    }
    console.log(ans);
    nsp=nsp+1;
    nst=nst-1;
    
}

// OR

// let np=0;
// let nq=5;
// for(let row=1;row<=5;row++){
//     let ans="";
//     let val=1;
//     for(p=1;p<=np;p++){
//         ans=ans+" "
//     }for(let q=1;q<=nq;q++){
//         ans=ans+val;
//         val++;
        
//     }
//     console.log(ans);
//     np=np+1;
//     nq=nq-1;
    
// }


// -----------------------------
// 1 1 1 1 1 
//   2 2 2 2 
//     3 3 3 
//       4 4 
//         5

// let np=0;
// let nq=5;
// let val=1;
// for(let row=1;row<=5;row++){
//     let ans="";
//     for(let p=1;p<=np;p++){
//         ans=ans+" "
//     }for(let q=1;q<=nq;q++){
//         ans=ans+val;
//     }
//     console.log(ans);
//     val++;
//     np++;
//     nq--;
    
// }


// -------------------------------------
// 5 4 3 2 1 
//   5 4 3 2 
//     5 4 3
//       5 4
//         5

let np=0;
let nq=5;
for(let row=1;row<=5;row++){
    let ans="";
    let val=5;
    for(let p=1;p<=np;p++){
        ans=ans+" ";
    }for(let q=1;q<=nq;q++){
        ans=ans+val;
        val--;
    }
    console.log(ans);
    np=np+1;
    nq=nq-1;
    
}  

// ------------------------------------
// 5 4 3 2 1
//   4 3 2 1
//     3 2 1
//       2 1
//         1

// let nsp = 0;
// let nnm = 5;
// for (let row = 1; row <= 5; row++) {
//     let ans = "";
//     for (sp = 1; sp <= nsp; sp++) {
//         ans = ans + " "
//     } for (let num = 6-row; num >= 1; num--) {
//         ans = ans + num;
        
//     }
//     console.log(ans);
//     nsp++
//     nnm--
// }

// **************************************************

//---------------------------------
// 5 5 5 5 5 
//   4 4 4 4 
//     3 3 3
//       2 2 
//         1

// let np=0;
// let nq=5;
// let val=5;
// for(let row=1;row<=5;row++){
//     let ans="";
//     for(let p=1;p<=np;p++){
//         ans=ans+" ";
//     }for(q=1;q<=nq;q++){
//         ans=ans+val;
//     }
//     console.log(ans);
//     val--;
//     np=np+1;
//     nq=nq-1;

    
// }
