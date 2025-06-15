

// Date:23rd-October

// In Javascript, Array is a heterogeneous data structure type.
// let arr=[10,'Ritika','z',true,false,undefined,null,function];

// array in for loop-------------------------------->
let names=['Ritika','Veera','Bhanu','Shanvi','Aryan','Vishal'];
for(let i=0;i<=names.length-1;i++){
    console.log(names[i]);
    
}
// OR
for(let i=0;i<names.length;i++){
    console.log(names[i]);
    
}

// array in while loop-------------------------------------->
let i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
    
}

// array in do while loop-------------------------------------->
let j=0;
do{
    console.log(names[j]);
    j++;
    
}while(j<names.length)

// for of loop----------------------------->
let names1=['Ritika','Veera','Bhanu','Shanvi','Aryan','Vishal']
for(let saurav of names1){
    console.log(saurav);
    
}

// for each loop----------------------------------->
// callback function(pass any functiion in any function as a parameter)
let names2=['Ritika','Bhanu','Shanvi','Veera','Aryan','Vishal']
names2.forEach(function chetiwal(ritika){
    console.log(ritika);
})















