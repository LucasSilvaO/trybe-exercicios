
const maiorPalavra = (frase) => {
    const fraseArray = frase.split(' ');
    let tamMaiorPalavra = 0;
    let maiorPalavra = '';

    for(let word of fraseArray){
        if (word.length > tamMaiorPalavra){
            tamMaiorPalavra = word.length
            maiorPalavra = word
        }

    }
    return maiorPalavra
}
console.log(maiorPalavra(`Com a crise a corda arrebentou do lado mais fraco e os estagiários saíram da empresa`))