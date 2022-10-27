const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    fraseArray[1] = nome;

   return `${fraseArray[0]} ${fraseArray[1]} ${fraseArray[2]}`;
   
   
}

 console.log(substituaX('Lucas'));   