import express from 'express'
import { getAllDrinks, getDrinkByName } from '../services/drink.service'

export const drinkRouter = express.Router()

drinkRouter.get('/', async(_req, res)=>{
    const drinks = await getAllDrinks()
    return res.status(200).json(drinks)
})

drinkRouter.get("/:drinkName", async(req, res)=>{
    const {drinkName} = req.params
    const name = drinkName.replace("-", ' ')
    const drink = await getDrinkByName(name)
    if(!drink) return res.status(404).json("Bebida no encontrada")
    return res.status(200).json(drink)
})