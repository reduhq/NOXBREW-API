import express from "express"
import { getCurrentClient, verifyJWT } from "../utils/deps"
import { createSale, getAllSales } from "../services/sales.service"

export const salesRouter = express.Router()

salesRouter.post('/', verifyJWT, getCurrentClient, async(_req, res)=>{
    const {client_model} = res.locals
    const sales = await createSale(client_model.id)
    return res.status(200).json(sales)
})

salesRouter.get('/', verifyJWT, getCurrentClient, async(_req, res)=>{
    const {client_model} = res.locals
    const sales = await getAllSales(client_model.id)
    return res.status(200).json(sales)
})