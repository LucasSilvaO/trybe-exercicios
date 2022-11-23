const { encode, decode } = require('./encodeDecode.js');
describe('Testa as funções encode e decode', () => {
    it('a função encode é definida', () => {
      expect(encode).toBeDefined();
    });
    it('teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toEqual('12345');
    });
    it('este se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('12345')).toEqual('aeiou')
    });
    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('Trybe').length).toEqual(5)
    })
});    