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
  };
  console.log(info.personagem + " e " + info2.personagem)
  console.log(info.origem + " e " + info2.origem)
  console.log(info.nota + " e " + info2.nota)    
  if(info.recorrente === info2.recorrente){
    console.log("Ambos recorrentes.");
  }