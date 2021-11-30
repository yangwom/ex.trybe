// Ao chamar a função doingThings:


function wakeUp() {
    return 'acordado!'
}
//console.log(wakeUp())

function coffe() {
    return 'Bora tomar café!!'
}
//console.log(coffe())

function googNight() {
    return 'partiu dormir !'

}


const hight = (doingThings) => doingThings();

console.log(hight(coffe))

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (callBack) => {
    const employees = {
        id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const dados = (nomeCompleto) => {
    const insiraDados = {
        name: nomeCompleto,
        email: `${nomeCompleto.replace(' ', '_')}@trybe.com`
    };
    return insiraDados;
}

//console.log(newEmployees(dados))


//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// 

const checarNumero = (myNumber, number) => {
    if (myNumber === number) {
       return "Parabéns você ganhou"
   } else {
       return "tente novamente"
   }

}


const sorteio = (myNumber, callBack) => {
   const number = Math.floor(Math.random() * 5 + 1) 
   console.log(number)
   return callBack(myNumber, number)

}
console.log(sorteio(2, checarNumero))


// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const hof = (arr1,arr2,callBack) => {
    let contador = 0;
    for( let i = 0; i < arr1.length; i += 1) {
     const gabarito = callBack(arr1[i], arr2[i]) 
     contador += gabarito;
    }
    return `resultado final:${contador} corretas`
}
const verificar = (compara1,compara2) => {
if(compara1 === compara2) {
    return 1;
}if(compara1 === 'N.A') {
    return 0;
}
return -0.5
}

// console.log(hof(RIGHT_ANSWERS,STUDENT_ANSWERS,verificar))

// // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const multipliesFor2 = (element) => {
// //   console.log(`${element} * 2: ${element * 2}`);
// // };

// // numbers.forEach(multipliesFor2);


// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email) => {
//     console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
//   };
  
// emailListInData.forEach((element , index ) => {
//     showEmailList(element);
//     console.log(`sua posição é ${index}`)
// })
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 ===0)

}

console.log(findDivisibleBy3And5())

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((element) => element.length === 5)
}

console.log(findNameWithFiveLetters());

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find((element) => element.id === id )
  }
  
  console.log(findMusic('31031685'))