

// console.log(34);
// console.log("Ritika");  
// //they accepts strings and numbers and always printed in a blocked level manner.

process.stdout.write("Ritika ");
process.stdout.write("Chetiwal ");
// // they accepts only strings and always printed in an inline manner.
// console.log("Full Stack");
// console.log("development");


// r=row
// sp=space
// st=star

// Q1.

// *
// * *
// * * *
// * * * *
// * * * * *

// steps------
// print some stars
// then go to the new line.

for (let row = 0; row < 5; row++) {
    for (let st = 0; st <= row; st++) {
        process.stdout.write("* ")
    }
    console.log();
}

// another method

for (let row = 1; row <= 5; row++) {
    let ans = '';
    for (let col = 1; col <= row; col++) {
        ans += '+ ';
    }
    console.log(ans);
}

//Q2. 
// * * * * *
// * * * *
// * * *
// * *
// *

for (let row = 1; row <= 5; row++) {
    for (let st = 1; st <= 5 - row + 1; st++) {
        process.stdout.write("* ")
    }
    console.log();

}

// OR

for (let r = 1; r <= 5; r++) {
    for (let st = 5; st >= r; st--) {
        process.stdout.write("* ")
    }
    console.log();

}

// another method

for (let row = 1; row <= 5; row++) {
    let ans = '';
    for (let st = 5; st >= row; st--) {
        ans += '+ '
    }
    console.log(ans);

}

// Q3.
//         *
//       * *
//     * * * 
//   * * * * 
// * * * * *

// steps--------
// print spaces
// print stars
// go to the new line
// then update stars and spaces.

// let nsp = 4;
// let nst = 1;
// for (r = 1; r <= 5; r++) {
//     for (sp = 1; sp <= nsp; sp++) {
//         process.stdout.write("  ")
//     } for (st = 1; st <= nst; st++) {
//         process.stdout.write("* ")
//     }
//     console.log();
//     nsp = nsp - 1;
//     nst = nst + 1;

// }

// other method
// let nsp = 4;
// let nst = 1;

// for (let row = 1; row <= 5; row++) {
//     let ans = '';
//     for (let sp = 1; sp <= nsp; sp++) {
//         ans += '  ';
//     } for (let st = 1; st <= nst; st++) {
//         ans += '+ ';
//     }
//     console.log(ans);
//     nsp -= 1;
//     nst += 1;

// }

// Q4.
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let nsp = 0;
// let nst = 5;
// for (r = 1; r <= 5; r++) {
//     for (sp = 1; sp <= nsp; sp++) {
//         process.stdout.write("  ")
//     } for (st = 1; st <= nst; st++) {
//         process.stdout.write("* ")
//     }
//     console.log();
//     nsp = nsp + 1;
//     nst = nst - 1;
// }

// Q5.

//       ?
//     ? ? ?
//   ? ? ? ? ?
// ? ? ? ? ? ? ?

// let nsp = 3;
// let nst = 1;
// for (r = 1; r <= 4; r++) {
//     for (sp = 1; sp <= nsp; sp++) {
//         process.stdout.write("  ")
//     }
//     for (let st = 1; st <= nst; st++) {
//         process.stdout.write("? ")
//     }

//     console.log();
//     nsp = nsp - 1;
//     nst = nst + 2;

// }

// Q6.
//     *
//   * * *
// * * * * *
//   * * *
//     *

// steps-----
// print spaces
// print stars
// go to the new line
// if-update
// else-update

// let nsp = 2;
// let nst = 1;
// for (row = 1; row <= 5; row++) {
//     for (sp = 1; sp <= nsp; sp++) {
//         process.stdout.write("  ")
//     }
//     for (st = 1; st <= nst; st++) {
//         process.stdout.write("* ")
//     }

//     console.log();
//     if (row < 3) {
//         nsp = nsp - 1;
//         nst = nst + 2;
//     } else {
//         nsp = nsp + 1;
//         nst = nst - 2;
//     }
// }

// Q7.

// * * * * * 
//   * * *
//     *

// let nsp = 0;
// let nst = 5;
// for (r = 1; r <= 3; r++) {
//     for (sp = 1; sp <= nsp; sp++) {
//         process.stdout.write("  ")
//     } for (st = 1; st <= nst; st++) {
//         process.stdout.write("* ")
//     }
//     console.log();

//     nsp = nsp + 1;
//     nst = nst - 2;

// }

// Q8.
// * * * * *
//   * * *
//     *
//   * * *
// * * * * *

let nsp = 0;
let nst = 5;
for (r = 1; r <= 5; r++) {
    for (sp = 1; sp <= nsp; sp++) {
        process.stdout.write("  ")
    } for (st = 1; st <= nst; st++) {
        process.stdout.write("* ")
    }
    console.log();
    if (r < 3) {
        nsp = nsp + 1;
        nst = nst - 2;
    } else {
        nsp = nsp - 1;
        nst = nst + 2;
    }
}

