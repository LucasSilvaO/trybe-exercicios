let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let mediaAritmetica = 0
let maiorArray = numbers[0]
let menorArray = numbers[0]
for( let i = 0; i < numbers.length ; i += 1){
    console.log(numbers[i])
}
for(let i = 0; i < numbers.length; i += 1 ){
    soma = soma + numbers[i]
    
    }
    console.log("Sua soma é ", soma)
    mediaAritmetica = soma / numbers.length
    console.log("A média aritmética dos Arrays é ",mediaAritmetica)

 if(mediaAritmetica > 20){
    console.log("Valor maior que 20")
 }else if(mediaAritmetica < 20){
    console.log("Valor menor que 20")
 }

 for( let i = 0; i < numbers.length ; i += 1){

    if(numbers[i] > maiorArray ){
        maiorArray = numbers[i]
        
    }
}console.log(maiorArray)
    
let resultado = 0
for( let i = 0; i < numbers.length ; i += 1){
    if (numbers[i] % 2 !== 0){
        resultado += 1
    }
}
if(resultado === 0){
    console.log("Não há números impares.")
}else{
    console.log("Existem ", resultado, " números impares nesse array.")
}
 for( let i = 0; i < numbers.length ; i += 1){

    if(numbers[i] < menorArray ){
        menorArray = numbers[i]
        
    }
}
    console.log("O menor número é ",menorArray)
    let numbers1 = []

    for( let i = 0; i <= 25 ; i += 1){
        numbers1.push(i)
        console.log(numbers1[i] / 2 )
    }
        