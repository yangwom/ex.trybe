let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
filhoDoFilho.innerHTML = '<strong>yang kaakaak</strong>'



let section = document.querySelector('#elementoOndeVoceEsta')
section.parentElement.style.color = 'red'

let pai = document.querySelector('#pai')



let paragrafo = document.createElement('p')
paragrafo.innerHTML = 'oi vamos brincar'
section.appendChild(paragrafo) 

let filho = document.createElement('p')
filho.innerText = 'quero dormir'

section.parentElement.appendChild(filho)
//Crie um filho para primeiroFilhoDoFilho .

let primeiroFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoPrimeiro = document.createElement('p')
filhoDoPrimeiro.innerText = 'pohaaaaa quero sair daqui kakaka'
primeiroFilho.appendChild(filhoDoPrimeiro)
console.log(filhoDoPrimeiro.parentElement.parentElement.nextElementSibling)

let excluirTodos = document.querySelector('pai');
for(let i = 0; i < excluirTodos.childNodes.length; i++) {
    let excluir = excluirTodos[i]
    if(excluir !== 'elementoOndeVoceEsta') {
        excluir.removechild()
    }
    
}







