let promise=new Promise(function(resolve,reject){
    resolve("Done")
    reject("Error")
})
promise.then(result=>{
    console.log(result)
})
promise.then(result=>{
    alert(result)
})

promise.finally(()=>{
    console.log("Completed")
})

let promise1=new Promise(function(resolve,reject){
    resolve(1)
    reject("Error")
})

promise1
.then(value => {
    console.log(value)
    return value*2
})
.then(result=>{
    console.log(result)
    return result * 4
})
.then(result=>{
    let div=document.querySelector('.result')
    div.innerHTML="final result "+result;
    console.log("final result "+result)
})

// fetch API
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        let todos=json
        let tbody=document.querySelector('.content')
        todos.forEach(todo => {
            let tr=document.createElement('tr')
            if(todo.userId==1)
                {
                    tr.innerHTML=`<td>${todo.id}</td>
                    <td>${todo.userId}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed}</td>`
                    if(todo.completed)
                        tr.classList.add('bg-green-500')
                    else
                        tr.classList.add('bg-yellow-500')
                    
                    tbody.append(tr)
                }
            
          // console.log(todo) 
        });
        //console.log(json)
    }
    )
