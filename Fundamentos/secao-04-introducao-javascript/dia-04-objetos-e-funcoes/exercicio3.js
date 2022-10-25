
function verificaPalindrome(palavra){
    for(let key in palavra){
        if (palavra[key] != palavra[(palavra.length - 1) - key]){
            return false
        }
    }
    return true
}
console.log(verificaPalindrome("arara")); 