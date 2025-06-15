

// Assingnment doubts

// printing Fibonacci number sequence---------------------------------------->
/*
first=0;
second=1;


next=first+second;
first=second;
second=next;

0 1 1 2 3 5 8 13
*/

let fn=0;
let sn=1;
for(let i=1;i<=20;i++){
    nn=fn+sn;
    console.log(fn)
    fn=sn;
    sn=nn;
}
console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++`);

// or
let a=0;
let b=1;
for(let i=0;i<20;i++){
    console.log(a);
    let next=a+b;
    a=b;
    b=next;
}
    

/*
dry run

l18 fn=0
l19 sn=1
l21 i=1
i<=10 1<=10 true
l22 nn=fsn 0+1=1
l23 "0"
l24 fn=1
l25 sn=1
i++ i=2
i<=10 2<=10 true
l22 nn=fn+sn 1+1=2
l23 "1"
l24 fn=1
l25 sn=2

i++ i=3
i<=10 3<=10 true
l22 nn=fn+sn 1+2=3
l23 "1"
l24 fn=2
l25 sn=3

i++ 



*/

/*
palindrome nitin nitin
malayalam 


123321 


*/
console.log(`****************************************************`);

// Palindrome number check------------------------------------------->

let numx=1013101;
let og=numx;
let temp=numx;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}

let rev=0;
let power= Math.pow(10,nod-1);
    

while(numx>0){
    let ld=numx%10;
    rev=rev+(ld*power);
    numx=Math.floor(numx/10);
    power=power/10;
}


// console.log(ans);
if(og==rev){
    console.log("it is palindrome");
    
}else{
    console.log("not a palindrome");
    
}

console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++`);

let num=12321;
let org=num;
let revNum=0;
while(num>0){
    let lastDigit=num%10;
    revNum=revNum*10+lastDigit;
    num=Math.floor(num/10);
    
}
console.log(revNum);
if(revNum==org){
    console.log(`it is palindrome`);
    
}else{
    console.log(`not palindrome`);
    
}




















