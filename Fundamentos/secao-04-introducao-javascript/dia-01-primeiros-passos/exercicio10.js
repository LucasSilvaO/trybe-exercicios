const valorCusto = 1000
const valorVenda = 1500

let valorCustoTotal = valorCusto + ( valorCusto * 0.20)
let lucro = valorVenda - valorCustoTotal
let vendas = 1000

if(vendas === 1000){
    lucroTotal = lucro * 1000
    console.log("Seu lucro é ", lucroTotal)
}else if( valorCusto < 0 || valorVenda < 0 || vendas < 0){
    console.log("Favor inserir valores maiores que 0.")
}
