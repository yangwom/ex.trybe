const getSuperHero = require('./testeAssincrono');


// beforeEach( async () => {
//     const hero =  getSuperHero('https://www.superheroapi.com/api.php/4192484924171229/720')
    
// }) 

// test('Verifica se o nome do herói é Wonder Woman', async () => {
//   const hero = await getSuperHero('https://www.superheroapi.com/api.php/4192484924171229/720');
//   expect(hero).toBe('Wonder Woman');
// });

beforeEach(() => console.log('1 - beforeEach'));// 1
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));//2
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});
