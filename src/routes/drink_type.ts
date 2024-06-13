import express from 'express'
import { getAllDrinkTypes } from '../services/drink_type.service'

export const drinktypeRouter = express.Router()

drinktypeRouter.get('/', async(_req,res)=>{
    const drinkType = await getAllDrinkTypes()
    return res.status(200).json(drinkType)
})