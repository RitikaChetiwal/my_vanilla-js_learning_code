let addForm = document.querySelector('.addForm')
let ul = document.querySelector('.ul')

addForm.addEventListener('submit',(event) => {
    event.preventDefault() 
    console.log(event);
    let itemValue = document.querySelector('.todoInput').value
    let listItem = document.createElement('li')
    // console.log(listItem);
    listItem.className = 'li';
    let itemNode = document.createTextNode(itemValue)
    let newLi = listItem.appendChild(itemNode)
    console.log(newLi);
    ul.appendChild(listItem)

    let btn = document.createElement('button')
    btn.className = 'cross'
    btn.appendChild(document.createTextNode('x'))
    btn.style.marginLeft = '131px'
    listItem.appendChild(btn)

    document.querySelector('.todoInput').value = ""    
    
}) 

ul.addEventListener('click',(event) => {
    if(event.target.classList.contains('cross')){
        if(confirm('Are you sure want to delete?')){
            ul.removeChild(event.target.parentElement)
        }
    }else{
        alert('why are uh wasting ur time?')
    }
    
})