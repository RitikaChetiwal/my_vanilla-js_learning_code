

// <--------------------Assignment-1------------------------->

// Q1.
// check for a given number is even or odd.
let num = 7;
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

// Q2.
// print odd number between 1 to 7
for (let i = 1; i <= 7; i++) {
  if (i % 2 === 0) {
    continue; 
  }
  console.log(i);
}

// Q3.

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break; 
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// Q4.

let count = 0;
while (count < 10) {
  console.log(count);
  if (count === 5) {
    break; // Exits the loop when count is 5
  }
  count++;
}

// Q5.
// switch conditionals
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// Q6.

for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log(`${i} is divisible by 3`);
    break; // Exits the loop after first divisible by 3 number is found
  }
}

// Q7.

let x = 0;
while (x < 5) {
  x++;
  if (x === 3) {
    continue; // Skips the rest of the code when x is 3
  }
  console.log(x);
}

// Q8. 

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(`${i} is divisible by both 2 and 3`);
  } else if (i % 2 === 0) {
    console.log(`${i} is divisible by 2`);
  } else if (i % 3 === 0) {
    console.log(`${i} is divisible by 3`);
  } else {
    console.log(`${i} is not divisible by 2 or 3`);
  }
}