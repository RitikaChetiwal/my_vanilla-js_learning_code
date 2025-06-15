

// Number traversals----------

// let num=786;
// console.log(num%10);   //modulus operator
// console.log(num/10);
// console.log(Math.floor(num/10));

// 7.

// no. of digits(nod)=??

// let num=5678;
// let nod=0;
// while(num>0){
//     num=Math.floor(num/10);
//     nod++;
// }
// console.log(nod);

// 8.printingfrom last digit--------------->

// 8
// 7
// 6
// 5

// [l=last digit and f=first digit.]

// let num=5678;
// while(num>0){
//     let l=num%10;
//     console.log(l);
//     num=Math.floor(num/10); 
    
// }

// 9.

// find oddcount and evencount.

// let num=253786;
// let oddcount=0;
// let evencount=0;
// while(num>0){
//     let l=num%10; 
//     if(l%2==0){
//     evencount=evencount+1;
//     }else{ 
//     oddcount=oddcount+1;
//     }
//     num=Math.floor(num/10);
// }
//     console.log(oddcount,evencount);

// // 10.

let num=12345;
let temp=num;
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++;
}
// console.log("leftover number:",num);
let div=Math.pow(10,nod-1);
while (num>0){  
    let f=Math.floor(num/10);
    console.log(f);
    num=num%div;
    div=Math.floor(div/10);  
}


    