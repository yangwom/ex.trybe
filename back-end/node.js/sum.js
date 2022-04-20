const ex = (num1, num2, num3) => {
    const number = num1 && num2 && num3
const promises = new Promise((resolve, reject) => {
    if(typeof number != 'number') reject(new Error('so aceita numeros'));

    const resultado = (num1 + num2) * num3
    resolve(resultado)
    console.log('deu certo')
});
return promises;
}
console.log(ex(2,3,2))
