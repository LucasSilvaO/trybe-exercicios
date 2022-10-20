let a = 80;
let b = 50;
let c = 50;

if(a < 0 || b < 0 || c < 0){
    console.log("Angulo inválido!!")
}else{

if(a + b + c === 180){
    console.log("É um triângulo.")
}else if(a + b + c !== 180){
    console.log("Não é um triângulo!")
}
}