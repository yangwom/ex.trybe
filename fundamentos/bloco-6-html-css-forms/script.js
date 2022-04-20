let select = document.querySelector('#todos-os-estdos');
let array = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins' ]
for(let i = 0; i < array.length; i++) {
    let option = document.createElement('option')
    option.innerText = array[i]
    select.appendChild(option)
}

 



// let myModal = new bootstrap.Modal(document.getElementById('myModal'));
// const bntMaisInfo = document.querySelector('#mais-info')

// bntMaisInfo.addEventListener('click', (e) => {
//     e.preventDefault();
//     myModal.show()
// });
document.querySelector('h1').innerText='prencha o formulario'
document.querySelector('p').innerHTML = '<strong> preencha seus dados'

let calendario = document.getElementById('myInputId');
calendario.pattern='\d{1,2}/\d{1,2}/\d{4}'
let string = calendario.value.split("/")
if(calendario.value !== "") {
    if(string[0] > 0  && string[0] <= 31 && string[1] > 0 && string[1] <= 12 && string[2] >= 0) {
    }else {
        alert('formato errado')
    }
}





// Verificar o formato da data dd/mm/aaaa .
// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.
// Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
// Campo obrigatório
