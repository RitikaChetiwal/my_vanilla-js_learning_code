const classing=document.querySelector('h1')
let btn=document.querySelector('button')
let para=document.querySelector('p')

console.log(classing.className);

// classing.classList.add('heading2') 
// console.log(classing.className);
// or
classing.className='heading2'
console.log(classing.className);


btn.onclick=function(){
    para.className='red'
}


btn.ondblclick=function(){
    para.classList.remove('red')
}