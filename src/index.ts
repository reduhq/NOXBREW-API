import express from 'express'
import cors from 'cors'
import {userRouter} from './routes/user.router'
import { loginRouter } from './routes/login.router'
import { clientRouter } from './routes/client.router'
import { drinkRouter } from './routes/drink.router'
import { favoriteRouter } from './routes/favorite.router'
import { cartRouter } from './routes/cart.router'

require('dotenv').config()
const app = express()

app.use(cors({
    origin:process.env.BACKEND_CORS_ORIGIN, 
    credentials: true,
    // methods: '*',
    // allowedHeaders: '*'
}))
app.use(express.json()) // middleware que transforma la req.body a un JSON
app.use('/api/v1/user', userRouter)
app.use('/api/v1', loginRouter)
app.use('/api/v1/client', clientRouter)
app.use('/api/v1/drink', drinkRouter)
app.use('/api/v1/favorite', favoriteRouter)
app.use('/api/v1/cart', cartRouter)

const PORT = 8000

app.get('/hello', (_req, res) =>{
    res.send("hello world!!")
})

app.listen(PORT, ()=>{
    console.log(`Server runninng on port ${PORT}`)
})