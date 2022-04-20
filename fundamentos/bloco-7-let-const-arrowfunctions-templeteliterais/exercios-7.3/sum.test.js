const sum =  require('./sum')
describe('test 1',() => {
    test('o retorno de 4 e 5  é 9',() => {
        expect( () => sum(4,'5')).toThrowError("parameters must be numbers")
        });
});

// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)

// 