
// * * * * * 
// * * * * *
// * * * * *
// * * * * * 
// * * * * * 

for (row = 1; row <= 5; row++) {
    for (st = 1; st <= 5; st++) {
        process.stdout.write("+ ")
    }
    console.log();
}

// OR

for (let row = 1; row <= 5; row++) {
    let a = "";
    for (st = 1; st <= 5; st++) {
        a = a + "+ ";
    }
    console.log(a);
}

// -------------------------

// * 
//   *
//     *
//       *
//         *  

// let nsp=0;
// let nst=1;
// for(row=1;row<=5;row++){
//     for(sp=1;sp<=nsp;sp++){
//         process.stdout.write("  ")
//     }for(st=1;st<=nst;st++){
//         process.stdout.write("* ")
//     }
//     console.log();
//     nsp=nsp+1;
//     nst=1;

// }

// OR------------------------

let nsp = 0;
for (let row = 1; row <= 5; row++) {
    for (let sp = 1; sp <= nsp; sp++) {
        process.stdout.write("  ")
    }
    process.stdout.write("* ")
    console.log();
    nsp = nsp + 1;

}

// OR-------------------------

// row and column matrix form
// row = row
// col = column

for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 5; col++) {
        if (row == col) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }
    console.log();

}

//         *
//       *
//     *
//   *
// *

// let nsp=4;
// let nst=1;
// for(row=1;row<=5;row++){
//     for(let sp=1;sp<=nsp;sp++){
//         process.stdout.write("  ")
//     }for(let st=1;st<=nst;st++){
//         process.stdout.write("*")
//     }
//     console.log();
//     nsp=nsp-1;
//     nst=1;
// }

// OR-------------------------

// let nsp=4;
// for(row=1;row<=5;row++){
//     for(sp=1;sp<=nsp;sp++){
//         process.stdout.write("  ")
//     }
//     process.stdout.write("* ")

//     console.log();
//     nsp=nsp-1;

// }

// OR-------------------

// by row and column matrix

// for(let row=1;row<=5;row++){
//     for(c=1;c<=5;c++){
//         if(row+c==6){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();

// }

// -----------------------------------

// *       *
//   *   *
//     *
//   *   *
// *       *



// by row and column matrix

for (let row = 1; row <= 5; row++) {
    for (let c = 1; c <= 5; c++) {
        if ((row + c == 6) || (row == c)) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }
    console.log();

}


// *         *
// *  *   *  *
// *    *    *
// *  *   *  *
// *         *

for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 5; col++) {
        if (row + col == 6 || row == col || col == 1 || col == 5) {
            process.stdout.write('* ')
        } else {
            process.stdout.write('  ')
        }
    }
    console.log();
}



//  *     * * * *      1
//  *     *            2
//  *     *            3
//  * * * * * * *      4
//        *     *      5
//        *     *      6
//  * * * *     *      7

for (row = 1; row <= 7; row++) {
    for (c = 1; c <= 7; c++) {
        if (row == 1) {
            if (c == 1 || c >= 4) {
                process.stdout.write("* ")
            } else {
                process.stdout.write("  ")
            }
        } else if (row <= 3) {
            if (c == 1 || c == 4) {
                process.stdout.write("* ")
            } else {
                process.stdout.write("  ")
            }
        } else if (row == 4) {
            process.stdout.write("* ")
        } else if (row <= 6) {
            if (c == 4 || c == 7) {
                process.stdout.write("* ")
            } else {
                process.stdout.write("  ")
            }
        } else {
            if (c <= 4 || c == 7) {
                process.stdout.write("* ")
            } else {
                process.stdout.write("  ")
            }
        }

    }
    console.log();

}


