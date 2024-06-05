import express from 'express'
import { getAllDrinks } from '../services/drink.service'

export const drinkRouter = express.Router()

drinkRouter.get('/', async(_req, res)=>{
    const drinks = await getAllDrinks()
    return res.status(200).json(drinks)
})