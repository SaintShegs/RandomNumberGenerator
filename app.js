let button=document.body.querySelector('.btn')

let out=document.body.querySelector('.output')

function rand(){
    let random= Math.ceil(Math.random()*20) 
    out.textContent=random
}

button.addEventListener('click', rand)


