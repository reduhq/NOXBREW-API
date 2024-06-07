import express from 'express'
import { getAllPrivateDrinks, getAllPublicDrinks, getDrinkByName } from '../services/drink.service'
import { getCurrentClient, verifyJWT } from '../utils/deps'

export const drinkRouter = express.Router()

drinkRouter.get('/public', async(_req, res)=>{
    const drinks = await getAllPublicDrinks()
    return res.status(200).json(drinks)
})

drinkRouter.get('/private', verifyJWT, getCurrentClient, async(_req, res)=>{
    const {client_model} = res.locals
    const drinks = await getAllPrivateDrinks(client_model.id)
    return res.status(200).json(drinks)
})

drinkRouter.get("/:drinkName", async(req, res)=>{
    const {drinkName} = req.params
    const name = drinkName.replace("-", ' ')
    const drink = await getDrinkByName(name)
    if(!drink) return res.status(404).json("Bebida no encontrada")
    return res.status(200).json(drink)
})