// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// Copiar
//       longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}
window.alert('hellow')

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));