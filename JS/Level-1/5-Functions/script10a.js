


// FUNCTIONS:(es5 and es6)

// es5 Functions:
// 1.function statement
// 2.function expression
// 3.Anonymous function
// 4.function with parameters
// 5.function with return.

/*
syntax:
function 'function name'(){
}
function name();
*/

// 1.function of Statement------------------------------>
function routine(){
    console.log("butter");
    console.log("spices");
    console.log("veggies");
    console.log("eat");
    console.log("dishwash");
}

// invoke/fire/triggger function.

routine();

function hello(){
    console.log("hello");
    
}

for(i=1;i<=10;i++){
    hello();
}

// OR

function SayHi(){
    console.log("hi Rockstar");
    
}

let rv=SayHi();
console.log(rv);


// # Computer Science uses DRY (Don't Repeat Yourself) principle.
// # Modular code.
// # JS functions-first class members.(We can store functions in variables too).

// 2.function of Expression------------------------------->
let func=function Ritika(){
    console.log("Ritika");    

}
func();

// OR
let func1=function SayBye(){
    console.log("bye Rockstar");
    
}
let rv2=func1();
console.log(rv2);

// 3.Anonymous function----------------------------------->
let func2=function (){
    console.log("Rockstar");  
}
func2();

// 4.functions with parameters----------------------------------->
function PrintMyDetails(name,age,salary,education){
    console.log(name);
    console.log(age);
    console.log(salary);
    console.log(education);
}
PrintMyDetails("Rockstar",100,200000000,"BSc.");   

// 5.functions with return--------------------------------->
function PrintMyAge(age){
    return age;
}
let ans=PrintMyAge(10);
console.log(ans);
// // ----------------------------
function somefunc(a,b,c){
    return a+b+c;
}
let ans2=somefunc(10,20,30);
console.log(ans2);
// ---------------------------------
// Simple Interest...
function SI(p,r,t){
    return p*r*t/100;
}
let amount=SI(1000,5,2);
console.log(amount);

let amount2=SI(2000,4,6);
console.log(amount2);

console.log(`*************************************************`);

let Ritika=function CheckPrime(num){
    let nof=0;
    for(let div=2;div*div<=num;div++){
        if(num%div==0){ 
            nof++;                
            break;
        }
    }
    if(nof>0){
        return "not prime"
    }else{
        return "prime"
    }
}

let RV=Ritika(12);
console.log(RV);  //if we haven't given function a variable.
// OR
let ans1=Ritika(12);
console.log(ans1);

console.log(`*****************************************************`);

// printing prime and not prime numbers between 10 and 300.
let printPrimeOrNot=function PrimeInRange(starting,ending){
    for(let num=starting;num<=ending;num++){
        let nof=0;
        for(div=2;div*div<=num;div++){
            if(num%div==0){
                nof++;
                break;
            }
        }
        if(nof>0){
            console.log(num,"not prime");
        }else{
            console.log(num,"prime");
            
            
        }
    }

}
let ans4=printPrimeOrNot(10,300);
console.log(ans4);


console.log(`****************************************************`);
// check for prime number counts between 100 and 1000.
function PrimeInRange(starting,ending){
    let count=0;
    for(let num=starting;num<=ending;num++){
        if(num==1){
            continue;
        }
        let nof=0;
        for(div=2;div*div<=num;div++){
            if(num%div==0){
                nof++;
                break;
            }
        }
        if(nof==0){
            count++;
            
        }
    }
    return count;

}

let ans3=PrimeInRange(100,1000);
console.log(ans3);


