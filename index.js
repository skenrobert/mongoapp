import express from 'express'
import mongoose from 'mongoose'

const Person = mongoose.model('Person', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://mongoadmin:password@mongoserver:27017/mongoserver?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listing... people...')
  const people = await Person.find();
  return res.send(people)
})
app.get('/create', async (_req, res) => {
  console.log('created...')
  await Person.create({ tipo: 'person', estado: 'life' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
