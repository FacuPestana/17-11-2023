let titulo = document.querySelector('h1')
let parrafo = document.querySelector('p')
let button = document.querySelector('button')
let size 

button.onclick = function(){
    size = parrafo.style.fontSize
    titulo.innerText = 'Soy Facu' 
    parrafo.style.color = '#24FFEF'
    parrafo.style.fontSize = size + 1
}
