

const longestWord = (text) => {
    const wordArray = text.split(' ');
    let tamMaiorPalavra = 0;
    let maiorPalavra = '';

    for(let word of wordArray){
        if(word.length > tamMaiorPalavra){
            tamMaiorPalavra = word.length;
            maiorPalavra =  word;

        }
    }
    return maiorPalavra;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));
