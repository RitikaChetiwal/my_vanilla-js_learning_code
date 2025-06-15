

// Date:22nd-October

// <----------------------ARRAYS--------------------------->

// #syntax-------
// let array=[A,B,C,D,E,F]
// console.log(array[index number]);

// Index number starts from 0 to n.

let array1=[1,2,3,4,5,"f","r","s"];

console.log(array1);        //it shows the array as it is.

console.log(array1.length);     //it tells the number of elements in an array.     

console.log(array1[0]);     //it tells the value of element present at particular index number. 

console.log(array1[array1.length-1]);   //it tells the last value.

array1.push("Ritika");   
array1.push(66);        //it pushes any external value or string to last place.

array1.pop();
array1.pop();
array1.pop();   //it removes the value from last place.

array1.unshift('456');
array1.unshift("Chetiwal");   //it places any external value to the first place.

array1.shift();
array1.shift();
array1.shift();
array1.shift();     //it removes the value from first place.

console.log(array1);

console.log(array1.includes(5));
console.log(array1.includes("r"));  //it tells about any element is present in array or not and its output will always be a boolean expression.

console.log(array1.indexOf(2));
console.log(array1.indexOf("f"));   //it gives the starting index number of any element which is present in array otherwise it gives (output)-1.

// console.log(array1.findIndex("r"));

console.log(array1.lastIndexOf("r"));   //it tells the last repeated index number of any element.

let array2=new Array(5,8,9,"Ritika","Chetiwal");
// let str1=array2.join("*");
let str=array2.join();     //.join is a separator of elements.
console.log(str);

let array3=new Array(5,8,9,"Ritika","Saurav");
let str1=array3.join();
console.log(typeof str1);  //it gives output of string or number.

// Conventional method---------------->
let array4=new Array(5,8,9,"Ritika")
let str2=array4.toString();
console.log(str2);  //this is conventional method.

let arr5=[1,2,3,4,5,"f","r","s"];
console.log(arr5.at(0));    //another syntax to find element value by index number.

console.log(arr5.at(-1));   //it will print last value.
console.log(arr5.at(-2));   //it will print last 2nd value.

let arr6=['Captain America','IronMan',566,'Scarlett Witch','Hulk',65,'Thor',8698]
for(let i=0;i<=arr6.length;i++){
    console.log(arr6[i]);
    
}
let arr7=['Captain America','IronMan',566,'Scarlett Witch','Hulk',65,'Thor',8698]
for(let i=0;i<=arr7.length;i++){
    console.log(arr7[i]*2);
    
}

let arr8=[1,2,3,4,5];
arr8[0]=111;
console.log(arr8);

// Print Even numbers from an array-------------
let arr9=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<=arr9.length;i++){
    if(arr9[i]%2==0){
        console.log(arr9[i]);
        
    }
}

// Print maximum number from array--------------------
let max=0;
for(let i=0;i<=arr9.length;i++){
    if(max<arr9[i]){
        max=arr9[i];
    }
}
console.log(max);

// Print minimum number from array--------------
console.log("-------------------------");

let min=arr9.length;
    for(let i=arr9.length;i>=0;i--){
        if(min>arr9[i]){
            min=arr9[i];
        }
    }
    console.log(min);   //********************************************************/

// find first index of an array----------
let arr=[1,2,3,844,8,57,5,54];
let target=1;
let ans=0;
for(let i=0;i<arr.length;i++){
    if(target==arr[i]){
        ans=i;
        break;
    }
}
console.log(ans);

// Reverse an array--------------
console.log(arr.reverse());

// OR-----------

for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
    
}

arr8=[1,2,3,4,5,6,7]
arr8.push(`kfnv`)
console.log(arr8);

