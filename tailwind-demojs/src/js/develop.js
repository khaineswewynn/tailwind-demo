let btnDevelop1=document.querySelector('.btnDevelop1')
let btnDevelop2=document.querySelector('.btnDevelop2')
let btnDevelop3=document.querySelector('.btnDevelop3')

async function develop(proj,time1,time2,time3)
{   
    let design=await designTemplate(proj,time1);
    console.log(design)

    let code=await codeApp(proj,time2);
    console.log(code)

    let testing=await testApp(proj,time3);
    console.log(testing)
}

function designTemplate(proj,duration)
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(`Finish design for ${proj}`),duration)
    })
}

function codeApp(proj,duration)
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(`Finish code for ${proj}`),duration)
    })
}

function testApp(proj,duration)
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(`Finish testing for ${proj}`),duration)
    })
}

btnDevelop1.addEventListener('click',function(){
    develop("Project 1",2000,5000,3000)
})
btnDevelop2.addEventListener('click',function(){
    develop("Project 2",1000,4000,3000)
})
btnDevelop3.addEventListener('click',function(){
    develop("Project 3",3000,9000,5000)
})


