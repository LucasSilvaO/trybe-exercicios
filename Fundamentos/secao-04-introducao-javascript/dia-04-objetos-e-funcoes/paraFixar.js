

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals:  {
        golden: 2 , 
        silver: 3,
    }
}
player.medals['bronze'] = 7;
console.log(player.medals.bronze)
