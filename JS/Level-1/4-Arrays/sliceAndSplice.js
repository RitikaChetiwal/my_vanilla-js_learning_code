

// Methods of Arrays-------------------------------------->

//1.Slice method---------------------------------->
let arr = ['Ritika', 'Veera', 'Bhanu', 'Shanvi', 'Aryan', 'Vishal'];

console.log(arr.slice(2, 6));    //it will run from index number 2 but end to index 5.

console.log(arr.slice(2));  //it will run from index 2 till end.

console.log(arr.slice(7, 3));    //output will be an empty array.

console.log(arr.slice(-1, 5));   //output will be an empty array.

console.log(arr.slice(-6, -1));  //run from -6th position to -2nd.

console.log(arr.slice(-4)); //run from -4th position till end.  

console.log(arr.slice(-1)); //run from -1st position i.e., last index number.


// 2.Splice method----------------------------->
let fruits = ['banana', 'orange', 'apple', 'mango']
console.log(fruits);

fruits.splice(2, 0, 'cherry', 'kiwi');
console.log(fruits);    //elements will insert at index 2 and deletecount 0.

let colors = ['blue', 'peach', 'red', 'purple', 'beige', 'pink'];
console.log(colors);

colors.splice(2, 3, 'green', 'white', 'yellow')
console.log(colors);    //elements will insert at index 2 and 3 elements will be deleted.


// slice(start?: number, end?: number): (string | number)[]

// (method) Array<string>.splice(start: number, deleteCount: number, ...items: string[]): string[] (+1 overload)

let fastfood = ['burger', 'chilli potato', 'pizza', 'chowmein', 'chhole bhature']
fastfood.splice(2, 0, 'paties', 'momos')
console.log(fastfood);


let array = [0, 1, 2, 3, 4, 5];
// console.log(array.slice(1,4));


let slice = array.slice(1, 4);
console.log(slice);

// ****************************************************************

let arr1 = [0, 1, 2, 3, 4, 5];
// console.log(arr1.splice(2,3,10,20));        //tells which element is deleted

arr1.splice(2, 3, 10, 20)
console.log(arr1);

let splice = arr1.splice(2, 3, 10, 20)
console.log(splice);                    //gives reduced array



