

// Alphanumeric patterns------------->

// index=3; ASCII code of 'A' is 65 and ascii code of 'a' is 97.

// let name="Ritika"
// console.log(name.charCodeAt(3));

// 1.

// *
// * *
// * * * 
// * * * *
// * * * * *

for (let r = 1; r <= 5; r++) {
    let a = ""
    for (let ch = 1; ch <= r; ch++) {
        a = a + "* "
    }
    console.log(a);

}


// 2.

// From ASCII code to character.

// let num=65;
// console.log(String.fromCharCode(num));

// let num=97;
// console.log(String.fromCharCode(num));

// let num=32;
// console.log(String.fromCharCode(num)); 

// 32 means space it means nothing will print in the terminal.

// 3.

// A
// A B
// A B C
// A B C D
// A B C D E 

for (let r = 1; r <= 5; r++) {
    let a = "";
    v = 65;
    for (let ch = 1; ch <= r; ch++) {
        a = a + (String.fromCharCode(v))
        v++;
    }
    console.log(a);

}

// -------------------------------------


// A B C D E
// A B C D
// A B C
// A B 
// A

for (let r = 1; r <= 5; r++) {
    let a = "";
    let v = 65;

    for (let q = 1; q <= 5 - r + 1; q++) {
        a = a + (String.fromCharCode(v))
        v++;
    }
    console.log(a);

}

for (let r = 1; r <= 5; r++) {
    let a = "";
    let v = 65;
    for (let q = 1; q <= 5 - r + 1; q++) {
        a = a + (String.fromCharCode(v))
        v++;
    }
    console.log(a);

}

// A A A A A
// B B B B
// C C C
// D D
// E

// let v = 65;
// for (let r = 1; r <= 5; r++) {
//     let a = "";
//     for (let q = 1; q <= 5 - r + 1; q++) {
//         a = a + (String.fromCharCode(v))
//     }
//     console.log(a);
//     v++;

// }

// let v = 65;
// for (let r = 1; r <= 5; r++) {
//     let a = "";
//     for (let q = 1; q <= 5 - r + 1; q++) {
//         a = a + (String.fromCharCode(v))
//     }
//     console.log(a);
//     v++;

// }

// 4.

// * * * * *
//   * * * *  
//     * * * 
//       * * 
//         *

// let nsp = 0;
// for (let r = 1; r <= 5; r++) {
//     let a = "";
//     for (let sp = 1; sp <= nsp; sp++) {
//         a = a + "  ";
//     } for (ch = 1; ch <= 5 - r + 1; ch++) {
//         a = a + "* "
//     }
//     console.log(a);
//     nsp = nsp + 1;

// }

// 5.

// A A A A A
//   B B B B
//     C C C
//       D D
//         E

// let nsp = 0;
// let v = 65;
// for (let r = 1; r <= 5; r++) {
//     let a = "";
//     for (let sp = 1; sp <= nsp; sp++) {
//         a = a + " "
//     } for (ch = 1; ch <= 5 - r + 1; ch++) {
//         a = a + (String.fromCharCode(v))
//     }
//     console.log(a);
//     nsp = nsp + 1;
//     v++;

// }

// 6.

// A B C D E
//   B C D E
//     C D E
//       D E
//         E

// let nsp = 0;
// let v = 65;
// for (let r = 1; r <= 5; r++) {
//     let a = "";
//     for (let sp = 1; sp <= nsp; sp++) {
//         a = a + " ";
//     } for (let ch = 0; ch <= 4 - r + 1; ch++) {
//         a = a + (String.fromCharCode(v + ch))
//     }
//     console.log(a);
//     nsp = nsp + 1;
//     v++;

// }    //ch<=4-r+1;-------------->Important thing.
