document.addEventListener('DOMContentLoaded',function(){
    let msg=document.querySelector('#message')
    msg.addEventListener('keyup',function(event){
        //console.log(event.key)
        //console.log(event.keyCode)
        let content=msg.value;
       // console.log(content)
       if(content.length<=300){
        console.log(content)
        let leftChar=document.querySelector('#leftChar')
        leftChar.innerHTML=300-content.length
       }
       else
       {
        msg.setAttribute('readonly',true)
       }
    })

    let agree=document.querySelector('#agree')
    agree.addEventListener('change',function(){
        console.log("agree")
        console.log(agree.getAttribute('checked'))
        if(agree.getAttribute('checked')==null)
            {
                alert("You haven't agreed to terms");
                agree.setAttribute('checked','checked')
            }
        else{
            agree.removeAttribute('checked')
        }
       
       
    })
})