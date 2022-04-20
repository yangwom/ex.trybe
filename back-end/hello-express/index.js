const express = require('express')

const app = express();
const bodyParser = require('body-parser')
const { getSimpson, writeSimpson } = require('./getSimpison')

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong'})
})

app.post('/hello', (req, res) => {
    const { name } = req.body 
    res.status(200).json({ message: `hello ${ name }`})
    })

 app.post('/greetings', (req, res) => {
     const { name, age } = req.body
     if(age > 17) return  res.status(200).json({ message: `hello ${name}`});
     return res.status(200).json({ message: "Unauthorized" });
 }) 
 
 app.put('/users/:name/:age', (req, res) => {
     const { name, age } = req.params
     res.status(200).json({menssage: `seu nome é ${name}, e voce tem ${age} anos de idade`})
 })

app.listen(3001, () => {
    console.log(' 3001 o pai ta on ')
})

app.get('/simpsons',  async (req, res) => {
const yellow = await getSimpson()
res.status(200).json(yellow)
})

app.get('/simpsons/:id', async ( req, res) => {
    try {
        const { id } = req.params
        const yellow = await getSimpson()
        const filterId = yellow.find((personId) => personId.id === id)
        if(filterId) {
         return res.status(200).json(filterId)
        }
        return res.status(404).json({ message: 'simpson not found' });
    
    } catch(error) {
     return error
    }
  
})

app.post('/simpsons', async (req, res) => {
    try {
        const {id, name } = req.body
        const yellow = await getSimpson()
        const addYellow = yellow.map((filterId) =>  filterId.id).includes(id)
        
        if(addYellow) {
        return res.status(409).json({ message: 'id already exists' });
        }
       const  personYellow = yellow.push({ id, name } )
    
        await writeSimpson(personYellow)
        return res.status(204).end();
    }catch(error) {
    return error
    }
   

   
})





