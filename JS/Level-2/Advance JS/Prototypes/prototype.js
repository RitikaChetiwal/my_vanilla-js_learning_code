// ES5 version of contructor functions

// function user(username,logging,salary,count) {
//     this.username = username;
//     this.loginStatus = logging;
//     this.salary = salary;
//     this.count = count;
//     this.nameFunction = function (){
//         console.log(`Hello, My name is ${this.username.trim()}`);
//     }
// }

// user.prototype.userSalary = function(){
//     console.log(`My Salary is ${this.salary} and my login status is ${this.loginStatus}`);
    
// }

// user.prototype.countFunc = function (){
//     // this.count = this.count + 1;
//     this.count++
//     console.log(`Number of count are ${this.count}`);
    
// }

// user.prototype.trueLength = function () {
//     console.log(`true length of name : ${this.username.trim().length}`);
    
// }

// const user1 = new user(`   Ritika`,true,`56,000 Rs only`,11)
// user1.nameFunction();

// // prototypal functionalities
// user1.userSalary();
// user1.countFunc();
// user1.trueLength();

// console.log(`-----------------------------------`);


// const user2 = new user(`  Kabir`,false,`66,000 Rs only`)
// user2.nameFunction();
// user2.userSalary();


// ES6 version of contructor functions using class

class user {
    constructor(username,loginStatus,salary){
        this.username = username;
        this.loginStatus = loginStatus;
        this.salary = salary;
    }

    nameFunction (){
        console.log(`Hello My name is ${this.username.trim()}`);
        
    }

}

user.prototype.userSalary = function(){
    console.log(`My Salary is ${this.salary} and my login status is ${this.loginStatus}`);
    
}

user.prototype.trueLength = function () {
    console.log(`true length of name : ${this.username.trim().length}`);
    
}

const user1 = new user(`   Ritika`,true,`56,000 Rs only`)
user1.nameFunction();

// prototypal functionalities
user1.userSalary();
user1.trueLength();

const user2 = new user(`Kabir`,false,`66,000 Rs only`)
user2.nameFunction();
user2.userSalary();
