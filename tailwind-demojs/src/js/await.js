let dogContainer=document.querySelector('.dog')
async function getDogs()
{
    let response=await fetch("https://dog.ceo/api/breed/hound/images")
    let data=await response.json();
    let dogs=data.message;
    dogs.forEach(dog => {
        console.log(dog)
        let div=document.createElement('div')
        div.innerHTML=`<img src=${dog}> `
        dogContainer.append(div)
    });
}

getDogs();