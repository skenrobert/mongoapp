import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://mongoadmin:password@mongoserver:27017/mongoserver?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listing... people...')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/create', async (_req, res) => {
  console.log('created...')
  await Animal.create({ tipo: 'person', estado: 'life' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
