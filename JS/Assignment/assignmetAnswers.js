// 1. Prime Number Check Write a function isPrime(n) that checks whether a given number n is prime. Return true if the number is prime, otherwise return false. 

let func1 = function isPrime(n) {

    let nof = 0;
    for (div = 2; div * div <= n; div++) {
        if (n % div == 0) {
            nof++;
            break;
        }

    }
    if (nof > 0) {
        return false;
    } else {
        return true;
    }
}

let rv1 = func1(7);
console.log(rv1);

console.log(`******************************************************`);

// 2. Fibonacci Sequence Write a function fibonacci(n) that returns the first n numbers in the Fibonacci sequence. Example: fibonacci(5) should return [0, 1, 1, 2, 3] 
let func2 = function fibonacciNumber(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < 5; i++) {
        console.log(a);
        let nextNUM = a + b;
        a = b;
        b = nextNUM;
    }
}
let rv2 = func2(5);
console.log(rv2);

console.log(`********************************************************`);

// 3. Factorial Calculation Write a function factorial(n) that returns the factorial of a given number n. Example: factorial(5) should return 120 factorial(0) should return 1 
let func3 = function factorial(n) {
    let factorial = 1;
    for (i = 1; i <= 5; i++) {
        factorial *= i;
    }
    console.log(factorial);

}
let rv3 = func3(5);
console.log(rv3);

console.log(`******************************************************`);

// 4. Reverse a Number Write a function reverseNumber(n) that takes a number n and returns the number with its digits reversed. Example: reverseNumber(12345) should return 54321 reverseNumber(987) should return 789 
let func4 = function reverseNumber(n) {

    let revNum = 0;
    while (n > 0) {
        let lasdtDigit = n % 10;
        revNum = revNum * 10 + lasdtDigit;
        n = Math.floor(n / 10);
    }
    console.log(revNum);

}
let rv4 = func4(1234);
console.log(rv4);

console.log(`****************************************************`);

// 5. Sum of Even Numbers Write a function sumEvenNumbers(n) that returns the sum of all even numbers from 1 to n (inclusive). Example: sumEvenNumbers(10) should return 30 (because 2 + 4 + 6 + 8 + 10 = 30)
let func5 = function sumEvenNumbers(n) {

    let sumOfEven = 0;
    for (let num = 1; num <= n; num++) {
        if (num % 2 == 0) {
            sumOfEven += num;
        }
    }
    console.log(sumOfEven);
}
let rv5 = func5(10);
console.log(rv5);


console.log(`*************************************************`);

// 6. Right-Angled Triangle Pattern Write a function printTriangle(n) that prints a right-angled triangle pattern of stars (*) with n rows. Example for n = 4: 

// * 
// * * 
// * * * 
// * * * * 
// * * * * *
let func6 = function printTriangle(n) {

    for (let row = 1; row <= n; row++) {
        let ans = '';
        for (let st = 1; st <= row; st++) {
            ans += '* ';
        }
        console.log(ans);
    }
}
let rv6 = func6(5);
console.log(rv6);

console.log(`******************************************`);

// 7. Inverted Right-Angled Triangle Pattern Write a function printInvertedTriangle(n) that prints an inverted right-angled triangle pattern of stars (*) with n rows. Example for n = 4: 

// * * * * *
// * * * * 
// * * * 
// * * 
// * 
let func7 = function printInvertedTriangle(n) {

    for (let row = n; row >= 1; row--) {
        let ans = '';
        for (let st = 1; st <= row; st++) {
            ans += '* ';
        }
        console.log(ans);
    }
}
let rv7 = func7(5);
console.log(rv7);

console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++`);

let func7x = function printInvertedTriangle(n) {

    for (let row = 1; row <= n; row++) {
        let ans = '';
        for (let st = 1; st <= n - row + 1; st++) {
            ans += '* ';
        }
        console.log(ans);
    }
}
let rv7x = func7x(5);
console.log(rv7x);

console.log(`*****************************************************`);

// 8. Pyramid Pattern of Numbers Write a function printNumberPyramid(n) that prints a pyramid pattern using numbers. Example for n = 5: 
// 1 
// 121 
// 12321 
// 1234321 
// 123454321 
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';

        // Loop for increasing part
        for (let j = 1; j <= i; j++) {
            row += j;
        }

        // Loop for decreasing part
        for (let j = i - 1; j >= 1; j--) {
            row += j;
        }

        console.log(row);
    }
}

// Call the function with n = 5
printPattern(5);

console.log(`*******************************************************`);

// 9. Diamond Pattern of Stars Write a function printDiamond(n) that prints a diamond pattern of stars (*). Example for n = 5: 
//        * 
//      * * * 
//    * * * * * 
//  * * * * * * * 
// * * * * * * * * 
//  * * * * * * * 
//    * * * * * 
//      * * * 
//        * 
let func9 = function printDiamond(n) {

    let nsp = 4;
    let nst = 1;
    for (let row = 1; row <= n; row++) {
        let ans = '';
        for (let sp = 1; sp <= nsp; sp++) {
            ans += '  ';
        } for (let st = 1; st <= nst; st++) {
            ans += '* ';
        }
        if (row < 5) {
            nsp--;
            nst = nst + 2;
        } else {
            nsp++;
            nst = nst - 2;
        }
        console.log(ans);
    }
}
let rv9 = func9(9);
console.log(rv9);


// 10. Merge Two Objects Write a function mergeObjects(obj1, obj2) that merges two objects. If there are overlapping keys, the values from the second object should overwrite the values from the first object. Example: 
// const obj1 = { 
//         name: "Alice", 
//         age: 25 
// }   

// const obj2 = { 
//       age: 30, 
//       city: "New York" 
// }; 
//       mergeObjects(obj1, obj2); 

// // Expected output: { 
//             name: "Alice", 
//             age: 30, 
//             city: "New York" } **************************************

// Output: { name: "Alice", age: 30, city: "New York" }

const mergeObjects = (obj3, obj4) => ({ ...obj3, ...obj4 });
const obj3 = { name: "Alice", age: 25 };
const obj4 = { age: 30, city: "New York" };

const resultt = mergeObjects(obj3, obj4);
console.log(resultt);


// 11. Shallow Copy of an Object: Write a function shallowCopy(obj) that performs a shallow copy of an object. Modifying the new object should not affect the original. Example: const original = { a: 1, b: 2 }; const copy = shallowCopy(original); copy.a = 3; console.log(original.a); // Expected output: 1 console.log(copy.a); // Expected output: 3 

const shallowCopy = (object) => {

    let copy = object;        //Shallow copy

    console.log(`before-`, object);
    console.log(`before-`, copy);

    object.a = 3;

    console.log(`after-`, object);
    console.log(`after-`, copy);

    console.log(object.a)
    console.log(copy.a);
}

shallowCopy({ a: 1, b: 2 });




// 12. Remove Duplicates from Array Write a function removeDuplicates(arr) that removes duplicate elements from an array. Example: removeDuplicates([1, 2, 3, 1, 2, 4]); // Expected output: [1, 2, 3, 4] ******************************

const removeDuplicates = (arr) => [...new Set(arr)];
const result = removeDuplicates([1, 2, 3, 1, 2, 4]);
console.log(result); // Output: [1, 2, 3, 4]

// or
const removeDuplicates1 = (arr) => arr.reduce((unique, item) => {
    if (!unique.includes(item)) unique.push(item);
    return unique;
}, []);

// Example Usage
const result1 = removeDuplicates1([1, 2, 3, 1, 2, 4]);
console.log(result1); // Output: [1, 2, 3, 4]


// 13. Find Largest Element in an Array Write a function findLargest(arr) that finds and returns the largest number in an array. Example: findLargest([3, 5, 1, 8, 2]); // Expected output: 8 

const findLargestNum = (arr) => {
    let max = 0;
    for (let value of arr) {
        // console.log(value);
        if (max < value) {
            max = value;
        }
    }
    console.log(max);


}
findLargestNum([55, 51, 45, 54, 98]);

// 14. Sort an Array Without Using sort() Write a function sortArray(arr) that sorts an array of numbers in ascending order without using the built-in sort() method. Example: sortArray([5, 3, 8, 1, 2]); // Expected output: [1, 2, 3, 5, 8];**********////**********

function sortArray(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example Usage
let numbers = [5, 3, 8, 1, 2];
console.log(sortArray(numbers)); // Output: [1, 2, 3, 5, 8]


// 15. Palindrome Check Write a function isPalindrome(str) that checks whether a given string is a palindrome (reads the same forward and backward). Example: isPalindrome("madam"); // Expected output: true isPalindrome("hello"); // Expected output: false********************************.

function isPalindrome(str) {

    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] == str[j]) {
            return true;
        }
    }
    return false;
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('hello'));

console.log('****************************************');






