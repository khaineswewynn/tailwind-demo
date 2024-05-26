document.addEventListener('DOMContentLoaded',function(){
    let select=document.querySelector('#years')
    console.log(select)
    let msg=document.querySelector('.message')
    let div_click=false
    select.addEventListener('change',function(){        
        console.log(select.value)
        console.log(select.options[select.selectedIndex].text)
        msg.innerHTML=select.options[select.selectedIndex].text
    })

    let form=document.querySelector('#sform')
    form.addEventListener('submit',function(event){
        event.preventDefault()
        let name=document.querySelector('#name');
        console.log(name.value)
        console.log(select.value)
    })

    let box1=document.querySelector('.box1')
    box1.addEventListener('mouseenter',function(){
        box1.classList.add('bg-blue-500')
    })
    box1.addEventListener('mouseleave',function(){
        if(!div_click)
            box1.classList.remove('bg-blue-500')
    })
    let box2=document.querySelector('.box2')
    box1.addEventListener('click',()=>{
        box1.classList.add('bg-blue-500')
        if(box2.classList.contains('bg-red-500'))
            box2.classList.remove('bg-red-500')
        div_click=true
    })

    let btn1=document.querySelector('.btn1')
    btn1.addEventListener('click',(event)=>{
        if(event.ctrlKey)
            {
                alert("You click also ctrl key")
            }
    })
})