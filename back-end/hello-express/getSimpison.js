const fs = require('fs').promises
const getSimpson = async () => {
const wait = await fs.readFile('./simpsons.json')
return JSON.parse(wait);
}

const writeSimpson = (name) => {
return fs.writeFile('./simpsons.json', JSON.stringify(name))
}

module.exports = {
    getSimpson,
    writeSimpson,
}