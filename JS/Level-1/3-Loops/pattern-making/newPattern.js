

// <----------------NEW---------------->
//   + 
//    + +
//     + + +
//       + + + +
//        + + + + +

for (row = 1; row <= 5; row++) {
    for (sp = 1; sp <= row; sp++) {
        process.stdout.write("  ")
    } for (st = 1; st <= row; st++) {
        process.stdout.write("+ ")
    }
    console.log();

}

//       *
//     * * *
//   * * * * *
// * * * * * * *
//   * * * * *
//     * * *
//       *

// let nsp=3;
// let nst=1;
// for(row=1;row<=7;row++){
//     for(sp=1;sp<=nsp;sp++){
//         process.stdout.write("  ")
//     }for(st=1;st<=nst;st++){
//         process.stdout.write("* ")
//     }
//     console.log()
//     if(row<4){
//     nsp=nsp-1;
//     nst=nst+2;
//     }else{
//         nsp=nsp+1;
//         nst=nst-2;
//     }
// }



//         *
//       *
//     *
//   *
// *

let nsp = 4;
let nst = 1;
for (row = 1; row <= 5; row++) {
    for (sp = 1; sp <= nsp; sp++) {
        process.stdout.write("  ")
    } for (st = 1; st <= nst; st++) {
        process.stdout.write("* ")
    }
    console.log();
    nsp = nsp - 1;
    nst = 1;

}

