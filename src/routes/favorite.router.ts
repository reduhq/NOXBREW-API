import express, { Request, Response } from 'express'
import { getCurrentClient, verifyJWT } from '../utils/deps'

export const favoriteRouter = express.Router() 

favoriteRouter.post("/", verifyJWT, getCurrentClient, (_req:Request, res:Response)=>{
    console.log(res.locals.client_model)
    return res.json("ok")
})