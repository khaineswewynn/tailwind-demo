const addBtn=document.querySelector('.add')
const tbody=document.querySelector('#data')
const submit=document.querySelector('.submit')

const name=document.querySelector('#name')
const email=document.querySelector('#email')
const invoiceNo=document.querySelector('#invoiceNo')
const date=document.querySelector('#date')

//addBtn.onclick=fn
addBtn.addEventListener('click',function(){
    console.log("Click")
let tr=document.createElement('tr')
let td1=document.createElement('td')
let td2=document.createElement('td')
let td3=document.createElement('td')
let td4=document.createElement('td')
let td5=document.createElement('td')

let item=document.createElement('input')
item.setAttribute('type','text')
item.classList.add('border')
item.classList.add('border-gray-500')
item.classList.add('item')

let item2=document.createElement('input')
item2.setAttribute('type','number')
item2.classList.add('border')
item2.classList.add('border-gray-500')
item2.classList.add('price')
item2.setAttribute('value','0')

item2.onkeyup=function(){
    checkPrice(item2)
}

let item3=document.createElement('input')
item3.setAttribute('type','number')
item3.classList.add('border')
item3.classList.add('border-gray-500')
item3.classList.add('qty')
item3.setAttribute('value','0')
item3.onkeyup=function(){
    checkQty(item3)
}

let item4=document.createElement('span')
item4.innerHTML='0'

let item5=document.createElement('button')
item5.classList.add('text-red-500')
item5.classList.add('border')
item5.classList.add('border-gray-500')
item5.classList.add('p-2')
item5.innerHTML="X"

td1.append(item)
td2.append(item2)
td3.append(item3)
td4.append(item4)
td5.append(item5)

tr.append(td1)
tr.append(td2)
tr.append(td3)
tr.append(td4)
tr.append(td5)

tbody.append(tr)
})

submit.addEventListener('click',function(){
if(name.value.length==0)
    {
        name.classList.remove('border-gray-500')
        name.classList.add('border-red-500')
    }
else{
    let cname=name.value;
}

const items=document.querySelectorAll('.item')
console.log(items)
for(let index=0;index<items.length;index++)
    {
        if(items[index].value==0)
            {
                items[index].classList.remove('border-gray-500')
                items[index].classList.add('border-red-500')
            }
    }
})

const prices=document.querySelectorAll('.price')
const qtys=document.querySelectorAll('.qty')
const subtotals=document.querySelectorAll('.subtotal')
console.log(prices.length)
for(let index=0;index<prices.length;index++)
    {
        prices[index].addEventListener('keyup',function(){
            checkPrice(prices[index])
        })
        qtys[index].addEventListener('keyup',function(){
            checkQty(qtys[index])
        })
    }
function checkPrice(priceElement)
{
    //console.log(priceElement)
    //console.log("key release"+index)
    console.log(parseInt(priceElement.value))
    let qty=priceElement.parentElement.nextElementSibling.children[0]
    let subtotal=qty.parentElement.nextElementSibling.children[0]
    console.log(qty)
    if(parseInt(priceElement.value)!=0)
        {
            subtotal.innerHTML=parseInt(priceElement.value)*parseInt(qty.value)
            //subtotals[index].innerHTML=parseInt(prices[index].value) * parseInt(qtys[index].value)
        }
}

function checkQty(qtyElement)
{
    //console.log(priceElement)
    //console.log("key release"+index)
    console.log(parseInt(qtyElement.value))
    let price=qtyElement.parentElement.previousElementSibling.children[0]
    let subtotal=qtyElement.parentElement.nextElementSibling.children[0]
    
    if(parseInt(qtyElement.value)!=0)
        {
            subtotal.innerHTML=parseInt(price.value)*parseInt(qtyElement.value)
            //subtotals[index].innerHTML=parseInt(prices[index].value) * parseInt(qtys[index].value)
        }
}


