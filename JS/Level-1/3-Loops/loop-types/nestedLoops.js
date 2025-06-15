// Nested loops

for (let i = 5; i <= 15; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log("Ritika", i, j);

    }
}

// ----------------------------------

let i = 2;
while (i <= 5) {
    let j = 3;
    while (j <= 5) {
        console.log("Ritika", i, j);
        j = j + 1;
    }
    i = i + 1;
}

// Reserverd Keywords (break and continue)----------------------->

// break keyword----------->


for (let i = 1; i <= 5; i = i + 1) {
    console.log("ritika", i)
    for (let j = 1; j <= 3; j = j + 1) {
        console.log("dice", j);
        break;
    }
    console.log("ousted from the loop");
}

// ---------------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

// ------------------------------------

// let i = 0;
// while (i < 5) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }


// continue keyword---------------------->        


for (let i = 2; i <= 10; i++) {
    console.log("Ritika", i);
    if (i == 4) {
        continue;
    }
    console.log("Dice", i);

}

// --------------------------------------

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    if (i == 8) {
        break;
    }

    console.log(i);

}

