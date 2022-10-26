
let soma = 0;
function  somatorioNumero(numero){

    for(let index = 1; index <= numero; index += 1){
        soma += index
    }
    
    return soma;
}

console.log(somatorioNumero(5));