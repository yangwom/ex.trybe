const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
  
const acharPessoasMenores = (arr) => {
    const pesssoaFiltrada =  arr.filter((nãoSabeDiridir) => nãoSabeDiridir.age < 18)
return pesssoaFiltrada;
}
//console.log(acharPessoasMenores(objPeople))

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

 ;
console.log(removeStudentByName('Ricardo', arrayMyStudents)); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => number > 0 ? number * (-1 ): number);

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
    

 
  
  
  // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

  const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index]}
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]