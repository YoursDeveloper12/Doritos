const img = document.querySelector('.img')
const hamburger = document.querySelector('.hamburger')
const links = document.querySelector('ul')

function imgChange(e){
    img.src = e
}


function backgroundChange(e){
    const p= document.querySelector(".text p")
    if(e == "#FE545E"){
        document.body.style.color= "white"
        p.style.color= "white"
    }else{
        document.body.style.color= "#222"
        p.style.color= "#333"
    }
    document.querySelector('.container').style.background = e
}


function activeMenu(){
    hamburger.classList.toggle('active')
    links.classList.toggle('active')
}

hamburger.addEventListener('click', activeMenu)

console.log(links)