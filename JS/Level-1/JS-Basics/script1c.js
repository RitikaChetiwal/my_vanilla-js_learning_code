
// Operators - 
// arithematic operators,
// relational operators,
// logical operators

// Arithematic operator-- + - * / %

console.log(2 + 2);     // Addition 
console.log(3 - 2);     // Subtraction
console.log(6 * 4);     // Multiplication
console.log(8 / 2);     // Division
console.log(7 / 10);

// floor and ceil value
console.log(Math.floor(55.4));
console.log(Math.ceil(45.8));

console.log(Math.floor(33/5));
console.log(Math.ceil(3/8));

// modulus operator
console.log(55 % 7);
console.log(64 % 4);  //remainder

// Relational operator--< > == <= >= !=

// Output--true/false

console.log(10 > 5);
console.log(10 < 5);
console.log(10 == 10);
console.log(20 != 20);
console.log(10 != 20);

console.log(15 <= 2);
console.log(45 >= 34);
console.log(12 >= 12);

/*
10>=10
10>10--false
10=10--true

10>=5
10>5--true

5>=10
5>10--false
5=10--false

*/

// logical operators--AND OR NOT
// AND--&&-multiplication
// OR--||--addition
// NOT--!--true false true false

// TRUE--non-zero values(1,2,3,-5,-6,6,)
// FALSE--zero value(0)

console.log("------------------");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

/*
0 * 1 =0 = false

true && false
1 && 0
1*0=0 =m false

true && true
 1 && 1
 1 * 1 = 1 = true

**if any one value is false output is also false...


*/

console.log("------------------");


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false );

/*
true || true
1 || 1
1+1=2 = non zero value = true
*/

//not operator !


//** if any one value is true output is also true........

console.log("------------------");


console.log(!true);
console.log(!false);

console.log(5>3 || false);
/*
5>3 true
true || false 
1+0=1=true

**Output will always be inverted...........

*/

console.log("-------------------");


console.log(!(5-3));
