const myRemove = require('./script');
const myFizzBuzz = require('./script');

// test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;', () =>{
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
// });

describe('Testa função myFizzBuzz.', () => {
    it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    });
    it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(3)).toEqual('fizz')
    });
    it('Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(5)).toEqual('buzz')
    });
    it('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(7)).toEqual(7)
    });
    it('Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz('adsada')).toEqual(false)
    });
})

