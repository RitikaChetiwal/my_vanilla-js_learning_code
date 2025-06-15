
// JAVASCRIPT LEVEL-2

// function constructor:collecting objects in a single functions.

function Employees (name,age,salary,task){

    this.name=name;
    this.age=age;
    this.salary=salary;
    this.task=task;

}
let obj1=new Employees('Ritika',100,200,function(){
    console.log('Programmer');
    
})

let obj2=new Employees('vishal',200,50,function(){
    console.log('coder');
    
})

console.log(obj1,obj2);















