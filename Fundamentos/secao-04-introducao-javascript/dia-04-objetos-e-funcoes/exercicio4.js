let array = [2, 3, 6, 7, 10, 1];
let maiorArray = 0;
function achaMaiorArray(param){
    for(let key in array){
        if(param[key] > maiorArray){
            maiorArray = key;
        }
        
    }
    return maiorArray;
}
console.log(achaMaiorArray(array))