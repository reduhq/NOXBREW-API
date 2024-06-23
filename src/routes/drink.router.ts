import express from 'express'
import { getAllPrivateDrinks, getAllPublicDrinks, getDrinkByName, getPrivateSearchedDrinks, getPublicSearchedDrinks } from '../services/drink.service'
import { getCurrentClient, verifyJWT } from '../utils/deps'

export const drinkRouter = express.Router()

drinkRouter.get('/public/:category', async(req, res)=>{
    const {category} = req.params
    const drinks = await getAllPublicDrinks(category)
    return res.status(200).json(drinks)
})

drinkRouter.get('/private/:category', verifyJWT, getCurrentClient, async(req, res)=>{
    const {category} = req.params
    const {client_model} = res.locals
    const drinks = await getAllPrivateDrinks(client_model.id, category)
    return res.status(200).json(drinks)
})

drinkRouter.get("/:drinkName", async(req, res)=>{
    const {drinkName} = req.params
    const name = drinkName.replace(/-/g, ' ')
    const normalizedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    const drink = await getDrinkByName(normalizedName)
    if(!drink) return res.status(404).json("Bebida no encontrada")
    return res.status(200).json(drink)
})

drinkRouter.get('/public/search/:searchStr', async(req, res) =>{
    const {searchStr} = req.params

    const normalizedName = searchStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    const drinks = await getPublicSearchedDrinks(normalizedName)
    return res.status(200).json(drinks)
})


drinkRouter.get('/private/search/:searchStr', verifyJWT, getCurrentClient, async(req, res) =>{
    const {searchStr} = req.params
    const {client_model} = res.locals

    const normalizedName = searchStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    const drinks = await getPrivateSearchedDrinks(normalizedName, client_model.id)
    return res.status(200).json(drinks)
})