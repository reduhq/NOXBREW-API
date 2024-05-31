import express from 'express'
import {userRouter} from './routes/user.router'

require('dotenv').config()
const app = express()

app.use(express.json()) // middleware que transforma la req.body a un JSON
app.use('/api/v1/user', userRouter)

const PORT = 3000

app.get('/hello', (_req, res) =>{
    res.send("hello world!!")
})

app.listen(PORT, ()=>{
    console.log(`Server runninng on port ${PORT}`)
})