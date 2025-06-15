class User {
    constructor(username,age,myId){
        this.username = username;
        this.age = age;
        this.myId = myId
    }

    
}

class User1 extends User {
    constructor(username,age,myId,salary){
        super(username,age,myId,salary)
        this.salary = salary;
    }

    loginId(){
        console.log(`My login Id is ${this.myId}`);
        
    }
}

const user1 = new User1(`Ritika`,55,`v8f5gb154`,`67,000 Rs`)
console.log(user1);


