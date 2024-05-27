import express from 'express'

require('dotenv').config()
const app = express()

app.use(express.json()) // middleware que transforma la req.body a un JSON

const PORT = 3000

app.get('/hello', (_req, res) =>{
    res.send("hello world!!")
})

app.listen(PORT, ()=>{
    console.log(`Server runninng on port ${PORT}`)
})