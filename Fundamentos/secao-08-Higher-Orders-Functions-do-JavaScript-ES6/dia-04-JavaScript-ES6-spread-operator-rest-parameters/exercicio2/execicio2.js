function sum(...args) {
   return args.reduce((acc, curr) => acc + curr);
   
};

console.log(sum(4, 5, 6));