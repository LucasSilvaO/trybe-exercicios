let body = document.getElementById('corpo')
let corDeFundo = document.getElementById('cor-de-fundo');
let turnWhite = document.getElementById('turn-white');
let turnBlack = document.getElementById('turn-black');
let turnGreen = document.getElementById('turn-green');
let turnBlue = document.getElementById('turn-blue');
let turnYellow = document.getElementById('turn-yellow');
let fontBlack = document.getElementById('font-black');
let fontRed = document.getElementById('font-red');
let fontWhite = document.getElementById('font-white');

turnWhite.addEventListener('click', (event) => {
    const newColor = 'white'
    const backgroundColor = 'white'
    if(body.style.backgroundColor !== newColor){
    body.style.backgroundColor = newColor
    }else{
        body.style.backgroundColor = backgroundColor;
}
}
);

turnBlack.addEventListener('click', (event) => {
    const newColor = 'black';
    const backgroundColor = 'white';
    
    if(body.style.backgroundColor !== newColor){
        body.style.backgroundColor = newColor;
       
    }else{
        body.style.backgroundColor = backgroundColor;
        body.style.color = 'black'
    }

});
turnGreen.addEventListener('click', () =>{
    const newColor = 'green';
    const backgroundColor = 'white'
    if(body.style.backgroundColor !== newColor){
        body.style.backgroundColor = newColor;
    }else{
        body.style.backgroundColor = backgroundColor;
    }

});

turnBlue.addEventListener('click', () =>{
    const newColor = 'blue';
    const backgroundColor = 'white'
    if(body.style.backgroundColor !== newColor){
        body.style.backgroundColor = newColor;
    }else{
        body.style.backgroundColor = backgroundColor;
    }

})

turnYellow.addEventListener('click', () =>{
    const newColor = 'yellow';
    const backgroundColor = 'white'
    if(body.style.backgroundColor !== newColor){
        body.style.backgroundColor = newColor;
    }else{
        body.style.backgroundColor = backgroundColor;
    }

})

const alteraCorFont = (corFonte) => {
    let color = 'black'
    if(body.style.color !== corFonte){
        body.style.color = corFonte;
    }else{
        body.style.color = color;
    }
}

fontRed.addEventListener('click', alteraCorFont('red'));