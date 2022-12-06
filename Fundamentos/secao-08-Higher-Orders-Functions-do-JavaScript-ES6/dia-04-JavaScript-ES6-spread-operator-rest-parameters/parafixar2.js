
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const infos = {...user, ...jobInfos};
  console.log(infos);

  const {name, age, nationality, profession, squad, squadInitials} = infos;

  const presentationText = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} ${squad}`;

  console.log(presentationText);