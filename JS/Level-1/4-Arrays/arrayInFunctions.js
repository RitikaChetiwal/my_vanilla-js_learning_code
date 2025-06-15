

let array=[34,56,64,66,'24','67','44'];
console.log(array.__proto__);

// Q1.Traverse this array by 5 methods--------------
let nums=[100,200,'ritika',[1,2,3,4,5],
function func(){
    console.log("i am function");
},
function func1(){
    return 'dice academy'
}]

for(const saurav of nums){
    console.log(saurav);
    
}
console.log(nums[nums.length-1]);   //then output will be as it is.

// -------------------------------------------------->for function to be fired.
for(const saurav of nums){
    console.log(saurav);
    
}
console.log(nums[nums.length-1]());   //now function will be fired.

// OR-------------------------

let rv=nums[nums.length-1]();
console.log(rv);                    //function will be fired.

let array1=[10,20,30,'name',true,[1000,2000,3000]]
console.log(array1[5]);     //it will give index 5 value.

console.log(array1.at(4));      //same as above

console.log(array1[5][2]);      //it will give value of array in another array.

console.log(array1[5].length);















