function designTemplate()
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>
            resolve("Designed"),8000
        )
    })
}

function codeApp()
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Code"),5000
        })
    })
}

function testApp()
{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Testing"),7000
        })
    })
}

async function developApp()
{
    let code=await codeApp();
    console.log(code)
    
    let design=await designTemplate();
   console.log(design)

  

   let test=await testApp();
   console.log(test)
}

developApp();