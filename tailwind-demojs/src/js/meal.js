let div=document.querySelector('.meal')
let select=document.querySelector('#categories')
let meals=[];
select.addEventListener('change',function(){
    console.log("Selected")
    let option=select.value
    meals.forEach(meal => {
        if(option==meal.idCategory)
            {
                div.innerHTML=`<div>
                <img src="${meal.strCategoryThumb}">
                </div>`                
            }
           
    })
})

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => response.json())
.then(data=>{
    console.log(data.categories)
    meals=data.categories   
    
    meals.forEach(meal => {
        div.innerHTML+=`<div>
        <img src="${meal.strCategoryThumb}">
        </div>`
        select.innerHTML+=`<option value="${meal.idCategory}">${meal.strCategory}</option>`
    });
})
.catch( error => console.log("Error"))

