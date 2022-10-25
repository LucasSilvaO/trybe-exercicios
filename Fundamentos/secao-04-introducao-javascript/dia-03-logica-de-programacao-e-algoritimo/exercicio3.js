let menorPalavra = ''
let maiorPalavra = ''
let palavra = ''
let array = ['java', 'javascript', 'python', 'html', 'css'];
for (let index = 0 ; index <= array.length - 1; index += 1){
    palavra = array[index]
   
    if(palavra.length >= maiorPalavra.length){
        maiorPalavra = palavra
    }else {
        menorPalavra = palavra
    }
    
}
console.log(maiorPalavra)
console.log(menorPalavra)