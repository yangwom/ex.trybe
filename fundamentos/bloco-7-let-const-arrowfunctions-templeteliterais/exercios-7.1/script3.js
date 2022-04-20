// 1-Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

//  let fatorial = 4;
//  let resultado = fatorial
//  let multiAnterior = fatorial -1
 

//     for(let i = multiAnterior; i > 1 ; i--) {
// resultado *= i
// console.log(resultado)
//     }
    
//     const factorial = number => {
//         let resultado = 1;
//         for (let i = 1; i <= number; i++) {
//             resultado *= i
//         }
       
//         return resultado;
//     }

// console.log(factorial(4));

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(4));