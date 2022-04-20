const uppercase = require('./exercicios007');


it(' Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.', (done) => {
uppercase('test',(str) => {
    try {
        expect(str).toBe('TeST');
        done();
    } catch (error) {
done(error);
    }
})

})