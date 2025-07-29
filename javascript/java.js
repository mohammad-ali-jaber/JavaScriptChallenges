console.log("i love you nagham")

// let user={}
// console.log(user)

// user.fname='nagham'
// user.lname='love'
// user.age=20
// user.Married=true

// user.checkMarried=()=>{
//     return user.Married===true
// }
// console.log(user.checkMarried())

// let h1 =document.getElementById("main-title")
// console.log(h1.textContent)
// h1.style.color='red'

let root =document.getElementById("root")

function createDiv(number){
    let divHtml=document.createElement("div")


divHtml.setAttribute('id',`product-${number}`)
divHtml.setAttribute('class','product-name')

let h1Html=document.createElement("h1")
let h1Text=document.createTextNode(`nagham love ${number}`)
h1Html.appendChild(h1Text)
divHtml.appendChild(h1Html)


let pHtml=document.createElement('p')
let pText=document.createTextNode(`i love you nono ${number}`)
pHtml.appendChild(pText)
divHtml.appendChild(pHtml)


root.appendChild(divHtml)
}

// for (let i=0;i<3;i++){
//     createDiv(i+1)
// }

const button=document.getElementById('nono')

button.onclick=function(){
    console.log('click')
}

button.oncontextmenu=function(event){
    event.preventDefault()
    console.log('click rigth')
}

const h1=document.querySelector('h1')
button.onmouseenter=function(){
    h1.style.color='red'
    console.log('visit')
}

button.onmouseleave=function(){
    h1.style.color='black'
    console.log("leave")
}