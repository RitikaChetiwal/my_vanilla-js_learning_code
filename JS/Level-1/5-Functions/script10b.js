

// es6 Functions:
// 1.fat arrow function
// 2.fat arrow with parameters
// 3.fat arrow with return
// 4.fat arrow with implicit return.

// 1.fat arrow function---------------------->
let func1=()=>{
    console.log("hi Rockstar");
    
}
func1();

// 2.fat arrow with parameters------------------>
let func2=(name,age,salary,education)=>{
    console.log(name,age,salary,education);
    
} 
func2("Ritika",100,20000000,"BSc.");

// 3.function with return------------------------------>
let func3=(salary)=>{
    return salary;
}
let ans=func3(200000000);
console.log(ans);

// 4.functions with implicit return
let func4=(a,b)=>a+b;
let sum=func4(10,20);
console.log(sum);
// -----------------------------
let func5=(name)=>name;
console.log(func5("Rockstar"));
// OR
let func6=name=>console.log(name);
func6("Ritika")
