import express from 'express'
import { getCurrentClient, verifyJWT } from '../utils/deps'
import { createCart, getAllCart, updateCart } from '../services/cart.service'
import { cartUpdate } from '../types/cart.types'

export const cartRouter = express.Router()

cartRouter.post('/:drink_id', verifyJWT, getCurrentClient, async(req, res)=>{
    const {client_model} = res.locals
    const {drink_id} = req.params
    const newItem = await createCart(client_model.id, parseInt(drink_id))
    return res.status(200).json(newItem)
})

cartRouter.get("/", verifyJWT, getCurrentClient, async(_req, res)=>{
    const {client_model} = res.locals
    const cart = await getAllCart(client_model.id)
    return res.status(200).json(cart)
})

cartRouter.put('/', verifyJWT, getCurrentClient, async(req, res)=>{
    const {id, quantity} = req.body
    const cart:cartUpdate = {
        id,
        quantity
    }
    const updatedCart = await updateCart(cart)
    return res.status(200).json(updatedCart)
})