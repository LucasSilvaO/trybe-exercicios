
let a = document.getElementById('area')

a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrou);
a.addEventListener('mouseout', saiu);

function clicar(){
    
    if(a.innerText === 'Clicou!'){
        a.innerText = 'Desclicou!'
    }else{
    a.innerText = 'Clicou!'}
}
function entrou(){
   
    a.innerText = 'Entrou.'
    a.style.color = 'black'
    a.style.backgroundColor = 'pink'
}
function saiu(){
    
    a.innerText = 'Saiu'
    a.style.color = 'white'
    a.style.backgroundColor = 'green'
}