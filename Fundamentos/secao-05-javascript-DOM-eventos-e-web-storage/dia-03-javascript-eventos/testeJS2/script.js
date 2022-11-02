    let tn1 = document.getElementById('number1')
    let tn2 = document.getElementById('number2')
    let res = document.getElementById('res')

function somar(){
    
    let number1 = Number(tn1.value)
    let number2 = Number(tn2.value)
    res.innerHTML = `O resultado é ${number1 + number2}.`
}