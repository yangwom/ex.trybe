// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite', 'pao', 'mortandela'];

const fruitSalad = (fruit, additional) => {
    const newArray = [...fruit, ...additional]
  return newArray
};

//console.log(fruitSalad(specialFruit, additionalItens));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [saudação, ola] = saudacoes;

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

 [comida,animal,bebida] = [bebida, comida,animal]

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const getNationality = ({ firstName,  nationality  = 'brazil'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};


const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,});
  
  console.log(getPosition(-19.8157, -43.9542));

  const multiply = (number, value = 10) => number * value;
    // Escreva aqui a sua fun
  
  console.log(multiply(8));