import express, { Request, Response } from 'express'
import { getCurrentClient, verifyJWT } from '../utils/deps'
import { createFavorite } from '../services/favorite.service'

export const favoriteRouter = express.Router() 

favoriteRouter.post("/:drink_id", verifyJWT, getCurrentClient, async(req:Request, res:Response)=>{
    const {drink_id} = req.params
    const newFav = await createFavorite(res.locals.client_model.id, parseInt(drink_id))
    return res.status(201).json(newFav)
})

