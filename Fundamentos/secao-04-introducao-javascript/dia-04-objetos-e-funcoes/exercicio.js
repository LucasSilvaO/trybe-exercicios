let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//   console.log("Boas vindas ", info.personagem);
  info.recorrente = 'sim'
//   console.log(info);

//   for (let key in info){
//     console.log(key)
//   }

//   for (let key in info){
//     console.log(info[key])
//   }
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Pato Christmas on Bear Mountain, Dell s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
  }

for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'sim' &&
      info2[properties] === 'sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
}