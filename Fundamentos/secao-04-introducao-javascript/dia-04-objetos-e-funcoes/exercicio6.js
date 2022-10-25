let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
maiorArray = ''

function achaMenorPalavra(param){
for(let key in array){
    if (array[key].length > maiorArray.length){
        maiorArray =  array[key]
         }
   
    }
    return maiorArray
}
console.log(achaMenorPalavra(array))