const myobj = {
    name: 'Zelda',
    lastname: 'Da Silva',
    age: 21
}
localStorage.setItem('meusDados', JSON.stringify(myobj))
console.log(localStorage.getItem('meusDados'))

const recuperaObj = JSON.parse(localStorage.getItem('meusDados'));

