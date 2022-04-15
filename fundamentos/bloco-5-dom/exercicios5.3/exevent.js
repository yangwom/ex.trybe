function createDaysOfTheWeek() {
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//1  
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

const recuperandoUl = document.querySelectorAll('ul')[2]
for (let index = 0; index < dezDaysList.length; index += 1) {
  const numberdays = dezDaysList[index]
  const listDays = document.createElement('li')
  listDays.innerText = numberdays
  listDays.className = 'days'
  recuperandoUl.appendChild(listDays)
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    listDays.classList.add('holiday')
  }
  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    listDays.classList.add('friday')
  }
}

//   Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
//   Adicione a este botão a ID "btn-holiday" .
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .


let addBntDiv = document.querySelector('.buttons-container')
let bnt = document.createElement('button')
bnt.innerHTML = 'Feriados'
bnt.id = 'btn-holiday'
addBntDiv.appendChild(bnt)
//"rgb(238,238,238)"
//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
let click = true
bnt.addEventListener('click', function () {
  let holiday = document.querySelectorAll('.holiday')
  if (click) {
    for (let i = 0; i < holiday.length; i++) {
      holiday[i].style.backgroundColor = 'darksalmon'
      holiday[i].style.borderRadius = '50px'
    }
    click = false;
  } else {
    for (let i = 0; i < holiday.length; i++) {
      holiday[i].style.backgroundColor = ''
    }
    click = true
  }
});
// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .


let botom = document.createElement('button')
botom.id = "btn-friday"
botom.innerText = 'Sexta-feira'
divPai = document.querySelector('.buttons-container')
divPai.appendChild(botom)

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let valor = true
botom.addEventListener('click', () => {
  let friday = document.querySelectorAll('.friday')
  if (valor) {
    for (let i = 0; i < friday.length; i++) {
      friday[i].style.backgroundColor = 'azure'
      friday[i].style.borderRadius = '50px'
    }
    valor = false
  } else {
    for (let i = 0; i < friday.length; i++) {
      friday[i].style.backgroundColor = ''

    }
    valor = true
  }

});

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .

let diasDoCalendario = document.querySelectorAll('.days')
for (let i = 0; i < diasDoCalendario.length; i++) {
  diasDoCalendario[i].addEventListener('mouseover', function (e) {
    e.target.style.transform = 'scale(1.2)'
    e.target.style.transition = '0.6s'
    e.target.style.boxShadow = '5px 5px 5px green'
    e.target.style.borderRadius = '10px'
 });
}
for (let i = 0; i < diasDoCalendario.length; i++) {
  diasDoCalendario[i].addEventListener('mouseleave', function (e) {
    e.target.style.transform = 'scale(1.0)'
    e.target.style.boxShadow =''
 });


}
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function chefe (cozinhar) {
  let cozinheiro = document.createElement("span")
cozinheiro.innerHTML = 'cozinhar'
let divP = document.querySelector('.my-tasks')
divP.appendChild(cozinheiro)

  

}
chefe();

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function colorir(cor) {
let criarDiv = document.createElement('div')
criarDiv.className = 'task'
 let buscarDiv = document.querySelector('.my-tasks')
 buscarDiv.appendChild(criarDiv)
}
colorir();

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

 

let selected = document.querySelector('.task')

let valor3 = true
selected.addEventListener('click',(e) => {
  if(valor3) { 
    selected.classList.add('selected')
    e.target.style.backgroundColor ='blue'
    valor3 = false
     }
 else {
   selected.className = 'task'
  e.target.style.backgroundColor =''
  valor3 = true

 }

});
  
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .

let input = document.querySelector('#task-input')
let bntAdd = document.querySelector("#btn-add")
let paiUl = document.querySelector('.task-list')

bntAdd.addEventListener('click', (e) => {
if(input.value.length == 0) {
  alert('adicione o texto')
} else {
  let listAdd = document.createElement('li')
listAdd.innerText = input.value
paiUl.appendChild(listAdd)
input.value = ''
}

});

input.addEventListener('keyup', (e) => {
  if(e.key == 'Enter') {n
    if(input.value.length == 0) {
      alert('adicione o texto')
    } else {
      let listAdd = document.createElement('li')
    listAdd.innerText = input.value
    paiUl.appendChild(listAdd)
    input.value = ''
    }
  }
  
  
  });











