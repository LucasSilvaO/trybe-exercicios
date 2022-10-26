let array = [2, 3, 2, 5, 8, 2, 3]
let contRepetido = 0
let contNumero = 0
let indexNumeroRepetido = 0
function arrayRepetido(param){
    for(let key in param){
        let verificaParam = param[key] 
        for(let key2 in param){
            if(verificaParam === param[key2]){
                contNumero += 1
            }
        }

        if (contNumero > contRepetido){
            contRepetido = contNumero
            indexNumeroRepetido = key
        }
        contNumero = 0
        
           
            }
            return param[indexNumeroRepetido]
    }
    

console.log(arrayRepetido(array));

