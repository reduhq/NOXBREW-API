import express, { Request, Response } from 'express'
import { createClientValidator } from '../validators/client.validator'
import { createClient } from '../services/client.service'

export const clientRouter = express.Router()

clientRouter.post(
    '/',
    createClientValidator,
    async(req:Request, res:Response)=>{
        try{
            const {client, user} = req.body
            const newClient = await createClient(client, user)
            return res.status(201).json(newClient)
        }catch(error:any){
            return res.status(500).json(error)
        }
    }
)