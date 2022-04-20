const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  // Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  // const turnoNoite = (objeto,chave,valor) => {
  //  return objeto[chave] = valor;





  // }
  // console.log(turnoNoite(lesson2,'turno', 'tarde' ))
  // console.log(Object.entries(lesson2))

  // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
    // const  listarObj = obj => Object.keys(obj)
    // console.log(listarObj(lesson1))
    
    // Crie uma função para mostrar o tamanho de um objeto.

  // const tamanhoOject = (obj) => Object.keys(obj).length;
  // console.log(tamanhoOject(lesson3))
 
  // Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  //  const listValue = (obj) => Object.values(obj);
  //  console.log(listValue(lesson3))

  //  Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
  // console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

   //const allLessons = Object.assign({},{lesson1,lesson2,lesson3})

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// const acharestuandante = (obj) => {
//   let quantidade = 0;
//   const arr = Object.keys(obj)
// for(let i = 0; i < arr.length; i++) {
//   const chaveOjetos = arr[i]

// quantidade += obj[chaveOjetos].numeroEstudantes;

// }
// return quantidade;
// }
//   console.log(acharestuandante(allLessons))


  // Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

  const valueobj = (obj,number) => Object.values(obj)[number];
  console.log(valueobj)
