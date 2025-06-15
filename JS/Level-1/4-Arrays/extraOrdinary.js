

console.log('25th October');

// Flat method---------------------------------->
let arr=[54,65,'kdmfj','fufei',[351,['jeujf',6546],535]]
console.log(arr[4][0]);

console.log(arr.flat(2));   //flat differentiate array in an array into a single array.

// What push and pop returns??
let arr1=['burger','chilli potato','pizza','chowmein','chhole bhature']
console.log(arr1.push('chips'));
console.log(arr1.push('golgappe'));    //it gives/returns the updated number of elements.
// OR
// let a=arr1.push(656);
// console.log(a);    //another method to return updated number of elements.

console.log(arr1.pop());    //it gives the last element value popped.

// --------------------------------------------------

// Separate even numbers in another array.
let arr2=[2,3,7,8,4,6,3];
let arr3=[];
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        arr3.push(arr2[i])
    }
}
console.log(arr3);

// find the sum of oddnum and evennum and insert them in a single array.
let arr4=[];
let oddSum=0;
let evenSum=0;
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        evenSum+=arr2[i];
    }else{
        oddSum+=arr2[i];
    }
}
arr4.push(oddSum);
arr4.push(evenSum);
console.log(arr4);

// Reversing an array with the help of loop.
let arr5=[];
for(let i=arr2.length-1;i>=0;i--){
    arr5.push(arr2[i]);
}
console.log(arr5);

// find span=maxnum-minnum.
let array=[2,3,6,5,45,84,90];
let maxnum=array[0];
let minnum=array[0];
for(let i=0;i<array.length;i++){
    if(maxnum<array[i]){
        maxnum=array[i];
    }if(minnum>array[i]){
        minnum=array[i];
     }
}
let span=maxnum-minnum;
console.log(span);

// forEach loop in es6 function.
array.forEach((ele)=>{
    console.log(ele);
    
})

// Using this function, iterate each element the array so that every element turned added by 2.
array.forEach((ele)=>{
    ele=ele+2;
    console.log(ele);
    
})

// OR by another method using Map method (it gives a return value makes another array in output)
let array2=array.map((ele)=>
    ele=ele+2
)
console.log(array2);

// 
let stationary=['pencil','pen','eraser']         
let doesitcontains=stationary.includes('pen')
console.log(doesitcontains);

// Arrange an array in ascending order.
let array1=[2,4,7,3,0]
array1.sort()
console.log(array1);








