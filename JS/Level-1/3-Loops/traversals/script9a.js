

// Finding armstrong number (num==sum)

let num=371;
let x=num;
let y=num;
let nod=0;
while(x>0){
    x=Math.floor(x/10);
    nod++;
}
let sum=0;
while(y>0){
    let l=y%10;
    sum+=Math.pow(l,nod);
    y=Math.floor(y/10);
}
if(num==sum){
    console.log("Yes");    
}else{
    console.log("No");    
}