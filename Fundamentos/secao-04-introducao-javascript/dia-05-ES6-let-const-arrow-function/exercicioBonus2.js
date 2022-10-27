const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    fraseArray[1] = nome;
    let fraseFeita1 = `${fraseArray[0]} ${fraseArray[1]} ${fraseArray[2]}`;
    return fraseFeita1
   
   
}

//  console.log(substituaX('Lucas'));   

 const minhasSkills = (param) => {
    const skills = [`HTML`, `CSS`, `Javascript Básico`];
    let fraseFeita = ` ${param}\n Minhas três principais habilidades são: \n ${skills[0]} \n ${skills[1]} \n ${skills[2]}` ;
    return fraseFeita;

 }
 console.log(minhasSkills(substituaX('Lucas')))