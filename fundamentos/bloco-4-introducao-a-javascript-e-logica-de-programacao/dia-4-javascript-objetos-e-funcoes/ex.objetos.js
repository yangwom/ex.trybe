// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim',
//   };


//   for(let i in info) {
//       console.log('seja bem vinda' + ' ' + (info.personagem))
//   }

// for( let i in info) {
//     console.log(i)
// }
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim',
// };
// let info2 = {
//     personagem: 'tio patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim',

// };

// for( let i in info) {
//     if(info[i] == info2[i]) {
//         console.log("ambos recorrentes") 
//         } else {
//             console.log(info[i] + ' e ' + info2[i])
//         }
// }

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// function verificapalídrome(palavra) {

//     for(index in palavra) {
//         if(palavra[index] == palavra[(palavra.length-1) - index]) {
//             //a r ara
//             return true

//     } else {
//         return false
//     }
// }

// }
// console.log(verificapalídrome('arara'))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .


// function numberget(numbers) {
//     let maiorValor = 0
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > maiorValor) {
//             maiorValor = [i]
//         }

//     }
// return maiorValor
// }

// console.log(numberget([2, 3, 6, 7, 10, 1]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// function mininumber(numbers) {
//     let = menorNumber = 0
//     for(let i = 0; i < numbers.length; i++) {
//         if(numbers[i] < menorNumber) {
//             menorNumber = [i]
//         }
//     }

// return menorNumber;
// }

//console.log(mininumber([2, 4, 6, 7, 10, 0, -3]))

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
// function maxcaracteres(names) {
//     let quantidadeDeLetras = names[0]
//     for (let i = 0; i < names.length; i++) {
//         if (names[i].length > quantidadeDeLetras.length) {
//             quantidadeDeLetras = names[i]




//         }

//     }
//     return quantidadeDeLetras;
// }
// console.log(maxcaracteres(['José', 'Lucas', 'Nádia', 'yang', 'Fernanda', 'Joana']))


// console.log(maxcaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5 -Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 
// function quantidadeDeNumber(numberRepetido) {
//   let amazenar = 0;
//   let numeroRepet;
//   let count = 0;
//   let countRepetido = 0;
//   for (let i = 0; i < numberRepetido.length; i++) {
//     numeroRepet = numberRepetido[i]
//     for (let i = 0; i < numberRepetido.length; i++) {
//       if (numberRepetido[i] == numeroRepet) {
//         count++
//         if (count > countRepetido) {
//           countRepetido = count;
//           amazenar = numeroRepet;
//         }
//       }
//     }
//     count = 0;
//   }
//   return amazenar;
// }



// let array = [6, 3, 2, 5, 8, 2, 3, 3, 3, 2, 2, 2, 2, 2, 0]
// console.log(quantidadeDeNumber(array))

// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// { area: 0, perimetro: 0 }
// perimetro = (2*base) + (2*altura)
// area = base * altura

// function areaCalculada(base,altura) {
// let resultado = {
//    area: base * altura,
//    perimetro: 2*base + 2*altura,
// }
// return resultado;
// }
// console.log(areaCalculada(2,2))

/* 1 - crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares
 e ímpares no formato:
 { pares: 0,
   impares: 0 } */
// function paresIpares(arr) {
//     let resultado = {
//         numeroPares: [],
//         numeroIpares: [] ,
//     };
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 == 0) {
//             resultado.numeroPares.push(arr[i])
//         }else if( arr[i] % 2 == 1) {
//             resultado.numeroIpares.push(arr[i])
//         }
//     }
//     return resultado;
// }
// let array = [2, 10, 20, 50, 80, 21, 41, 35, 33, 53, 67];
// console.log(paresIpares(array))

// * *  Crie uma função que receba uma string word e outra string ending. 
// * Verifique se a string ending é o final da string word . Considere que a string ending 
// * sempre será menor que a string word. 
// * 
// * Valor de teste: 'trybe' e 'be'.
// * Valor esperado no retorno da função: true
// * 
// * verificaFimPalavra('trybe', 'be');
// * Retorno esperado: true
// * 
// * verificaFimPalavra('joaofernando', 'fernan');
// * Retorno esperado: false
// * 
// * 
// * USAR O SPLIT: 













// function calculadora(numero1, numero2, operador) {
//     if (operador == "+") {
//         console.log(numero1 + numero2)
//     } else if (operador == "-") {
//         console.log(numero1 - numero2) 
//     } else if (operador == "*") {
//         console.log(numero1 * numero2)
//     } else if (operador == "/") {
//         console.log(numero1 / numero2)
//     }

// }
// console.log(calculadora(100,50,"-"))


// 6-Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15


// function funcaoDeInteiro(inteiro) {
//   let soma = 0;
//   for(let i = 1; i <= inteiro; i++) {
//     soma += i
    
      

//   }
// return soma;
// }
// console.log(funcaoDeInteiro(5))


// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

//  function top(word , ending) {
//  word = word.split(word[word.length - ending.length -1])
//  console.log(word)
// return(word[1] == ending)
// }
//  console.log(top('gabriela','ela'))








