import express, { Request, Response } from 'express'
import { getCurrentClient, verifyJWT } from '../utils/deps'
import { createFavorite, deleteFavorite, getFavorites } from '../services/favorite.service'
import { deleteFavoriteValidator } from '../validators/favorite.validator'

export const favoriteRouter = express.Router() 

favoriteRouter.post("/:drink_id", verifyJWT, getCurrentClient, async(req:Request, res:Response)=>{
    const {drink_id} = req.params
    const newFav = await createFavorite(res.locals.client_model.id, parseInt(drink_id))
    return res.status(201).json(newFav)
})

favoriteRouter.get("/", verifyJWT, getCurrentClient, async(_req, res)=>{
    const {client_model} = res.locals
    const favs = await getFavorites(client_model.id)
    return res.status(200).json(favs)
})

favoriteRouter.delete('/:favorite_id', deleteFavoriteValidator, verifyJWT, getCurrentClient, async(req:Request, res:Response)=>{
    const {favorite_id} = req.params
    const deletedFav = await deleteFavorite(parseInt(favorite_id))
    return res.status(200).json(deletedFav)
})