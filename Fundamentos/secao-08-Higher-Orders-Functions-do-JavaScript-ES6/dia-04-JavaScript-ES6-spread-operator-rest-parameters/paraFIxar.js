// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Maçã', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Pêra', 'Kiwi'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
   const fruitCombination = [...fruit, ...additional];
   return fruitCombination;
};

console.log(fruitSalad(specialFruit, additionalItens));