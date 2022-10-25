let array = [2, 4, 6, 7, 10, 0, -3];
let menorArray = 0;
function achaMenorArray(param){
    for(let key in array){
        if(param[key] < menorArray){
            menorArray = param[key];
        }
        
    }
    return menorArray;
}
console.log(achaMenorArray(array))