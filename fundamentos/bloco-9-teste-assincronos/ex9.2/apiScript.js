


// apiScript.js     
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//   .then(response => response.json())
//   .then(data => document.querySelector('#jokeContainer').innerHTML = data.joke)
// };

const append = (imagens) => {

    const ol = document.querySelector('#burrice')
    const list = document.createElement('li')
    const imagenss = document.createElement('img')
    imagenss.src = imagens
    list.appendChild(imagenss)
    ol.appendChild(list)


}







const pikachuEuEscolhoVoce = async () => {
    const pokemonApi = 'https://pokeapi.co/api/v2/pokemon/'
    try {
        const response = await fetch(pokemonApi);
        const { results } = await response.json()
        results.map(urls => urls.url).forEach(async (links) => {
            const response = await fetch(links)
            const { sprites: { front_default } } = await response.json()
            append(front_default)


        })
    } catch (erro) {
        alert(erro.message)
    }
}
//  fetch(pokemonApi)
//         .then(choqueDoTrovao => choqueDoTrovao.json())
//         .then(todosOsPokemon => todosOsPokemon.results.map((urlspokedex) => urlspokedex.url).forEach((links) => fetch(links).then(e => e.json()).then(e => append(e.sprites.front_default))))
//         .catch(error => alert('error',error))





window.onload = () => pikachuEuEscolhoVoce()