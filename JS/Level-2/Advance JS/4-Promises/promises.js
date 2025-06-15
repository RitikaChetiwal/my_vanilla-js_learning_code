const promise = new Promise((resolve,reject) => {
    console.log(`async task`);
    setTimeout(() => {
        resolve()
    }, 1000);
})

promise.then(() => {
    console.log(`promise resolved`);
    
})

new Promise((resolve,reject) => {
    console.log(`async task 2`);
    
    setTimeout(() => {
        resolve()
    }, 2000);
}).then(() => {
    console.log(`promise resolved 2`);
    
})

const promise3 = new Promise((resolve, reject) => {
    console.log(`async task 3`);
    setTimeout(() => {
        resolve({username:'test', email:'test@gmail.com'})
    }, 3000);
})

promise3.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => console.log(username))

const promise4 = new Promise((resolve, reject) => {
    console.log(`task 4`);
    setTimeout(() => {
        let istrue = false;
        if(!istrue){
            console.log('hello');
            resolve({username:'test2',email:'test2@gmail.com'})
            
        }else{
            reject('error coming')
        }
    }, 4000);
    
})

promise4.then((user) => {
    console.log(user);
    return user.username;
    
}).then((username) => console.log(username)).catch((err) => console.log(err))

const promise5 = new Promise((resolve, reject) => {
    console.log(`task 5`);
    setTimeout(() => {
        let istrue = false;
        if(!istrue){
            console.log('hello');
            resolve({username:'test3', email:'test3@gmail.com'})
        }else{
            reject(`error coming`)
        }
    }, 5000);   
    
})

const prom5 = async () => {
    console.log(`hello there........`);
    
    try {
        let result = await promise5
        console.log(result);
        
    } catch (err) {
        console.error(err);
        
    }
}

prom5();