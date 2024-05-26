const username=document.querySelector('#username')
const password=document.querySelector('#password')
const msg=document.querySelector('#msg_username')
const reset=document.querySelector('.reset')
console.log(username)
const login=document.querySelector('.login')

//Event Focus
username.onfocus=checkUsername

function checkUsername()
{
    msg.innerHTML="Please enter username"
}
//Event Blur
username.onblur=function(){
    let data=username.value
    console.log(data.length)
    if(data.length==0)
        {
            msg.innerHTML="You must enter username"
            username.classList.remove('border-gray-600')
            username.classList.add('border-red-600')
        }
    else{
        msg.innerHTML=""
    }
}
//Event Click
login.onclick=function(){
if(username.value=="khaingswe" && password.value=="internet")
    {
        console.log("Correct! You can login.")
        username.value=""
        password.value=""
    }
else{
    alert("Incorrect!Try again")
}
}

reset.onclick=resetData

function resetData()
{
    username.value=""
    password.value=""
}




