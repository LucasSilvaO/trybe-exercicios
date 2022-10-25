
let primo = []
let naoPrimo = []
let maiorPrimo = 0
let num = 0
for(let index = 2; index <= 50; index += 1){

    if(index % 2 === 0){
        naoPrimo.push(index)
    }else if(index === 9 || index === 15 || index === 21 || index === 21 || index === 25 || index === 27 || index === 33 || index === 35 || index === 39 || index === 45 || index === 49){
        naoPrimo.push(index)
    }else{
        primo.push(index)
    }
}

console.log("Os números primos de 1 a 50 são ", primo)

for (let i = 0; i <= primo.length; i += 1){
    num = primo[i]    
    if(num > maiorPrimo){
        maiorPrimo = num
    }

}
console.log("O maior número primo de 1 a 50 é " , maiorPrimo)