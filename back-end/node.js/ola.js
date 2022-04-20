const fs = require('fs').promises

const prom = async () => {
    try {
        await Promise.all([
            fs.writeFile('./meu-arquivo.txt', 'texto'),
            fs.writeFile('oi.txt', 'xhhxhxx')
            ])
            console.log('arquivo lindo com sucesso')
    } catch(err) {
        console.error(`Erro ao escrever o arquivo: ${err.message}`)
    }
 
}

prom()