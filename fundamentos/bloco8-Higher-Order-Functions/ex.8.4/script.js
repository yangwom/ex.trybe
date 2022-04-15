// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.
// Copiar
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  //return arrays.flat()
  //return arrays.reduce((accrr , number,) => accrr.concat(number),)
  return arrays.reduce((acc, names) => acc = [...acc, ...names], [])
}
console.log(flatten())

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//   2 - Crie uma string com os nomes de todas as pessoas autoras.
// Copiar
//const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  const names = books.reduce((book, nameAuthor, index, array) => {
    if (index === array.length - 1) return `${book}  ${nameAuthor.author.name}.`;
    return `${book}  ${nameAuthor.author.name},`;
  }, '')
  return names.trim()
}

console.log(reduceNames())

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// Copiar
const expectedResult = 43;

function averageAge() {


  // const numberOfBooks = books.length;
  // const sumOfAges = books.reduce((sum, book) => (
  //   sum + (book.releaseYear - book.author.birthYear)
  // ), 0);
  // return sumOfAges / numberOfBooks;


  const element = books.length;
  const soma = books.reduce((sum, book) => sum + book.releaseYear - book.author.birthYear, 0)

  return soma / element;

}
console.log(averageAge())

// 4 - Encontre o livro com o maior nome.


// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

function longestNamedBook() {
  return books.reduce((acc, book) => book.name.length > acc.name.length ? book : acc)


}
//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

console.log(longestNamedBook())

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  //acc + curr.split('')
  return names.reduce((acc, curr) => acc + curr.split('').reduce((qtdA, elementA) => {
    if (elementA === 'a' || elementA === 'A') return qtdA += 1; {
      return qtdA;
    }
  }, 0), 0)

}
// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .
// Copiar

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const nameAndAverage = students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
  }));
  return nameAndAverage;
}
const newArr = [...grades]
//console.log(studentAverage())
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
//console.log(containsA())

// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
// Dica: use spread operator .
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) //altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
});

//2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
//Dica: use parâmetro rest .
// escreva sum abaixo
const sum = (...number) => number.reduce((acc, soma) => acc + soma, 0)

console.log(sum(2, 2, 3, 4, 5))

//  3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
// Dica: use object destructuring.


const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo;
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
//console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
//console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = () => people.filter(({ nationality, bornIn }) => nationality === 'Australian' && bornIn < 2000)

console.log(filterPeople())

// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: use array destructuring e abbreviation object literal .
// Copiar
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

//const toObject = ([modelo, marca, ano]) => ({modelo, marca, ano,})

//console.log(toObject(palio))

// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .
// Copiar
const myList = [1, 2, 3];

const swap = ([number1, number2, number3]) => [number3, number2, number1]

//console.log(swap(myList))

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
// Dica: use object destructuring .

// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
// ];

//const shipLength = ({name , length , measurementUnit}) => `${name} is ${length} ${measurementUnit} long` ;

// console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1]))// 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2]))// 'Yamato is 256 meters long'

// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .
// Copiar
// escreva greet abaixo

const greet = (nome, saudacao = 'Hi ') => `${saudacao} , ${nome}`

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'


