
const items = document.getElementsByClassName('list')
console.log(items);

// console.log(Array.isArray('items'));

Array.from(items).forEach((item,i) => {
    
    if(i % 2 === 0){
        item.style.backgroundColor = 'red'
    }else{
        item.style.backgroundColor = 'green'
    }
})

const loop = items.forEach((item,index) => {
    if(index % 2 === 0){
                item.style.backgroundColor = 'red'
            }else{
                item.style.backgroundColor = 'green'
            }
})

const ul = document.querySelector('ul')
const list = document.createElement('li')
console.log(list);
list.innerText = 'item 5'
list.style.backgroundColor = 'red'
ul.append(list)