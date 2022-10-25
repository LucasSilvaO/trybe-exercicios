// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);


let biggestPrimeNumber = 0

for(let index = 2; index <= 50; index += 1){
    let isPrime = true
    for (let div = 2; div < index; div += 1){
    if(index % div === 0 ) {
        isPrime = false
    }
        
    }
    if(isPrime){
        biggestPrimeNumber = index
}
   
}
console.log(biggestPrimeNumber)