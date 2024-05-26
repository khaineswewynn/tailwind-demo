document.addEventListener('DOMContentLoaded',function(event){
    console.log('js')
    console.log(event.target)
    //console.log(event.target.tagName)

document.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.tagName)
    if(e.target.tagName=='DIV')
        {
            let div=e.target
            if(div.classList.contains('bg-blue-500'))
                {
                    div.classList.remove('bg-blue-500')
                }
            else{
            let btns=div.querySelectorAll('button')
            if(btns.length<3 )
                {                    
                    let button=document.createElement('button')
                    button.innerHTML="Event1"
                    button.classList.add('bg-gray-500')
                    button.classList.add('h-6')
                    div.append(button)

                    if(btns.length==2)
                        {
                            div.classList.add('bg-red-500')
                        }
                    
                }
           
            }
            
        }
})


})