import express, { Request, Response } from 'express'
import { createClientValidator } from '../validators/client.validator'
import { createClient } from '../services/client.service'
import { getByEmail, getByUsername } from '../services/user.service'

export const clientRouter = express.Router()

clientRouter.post(
    '/',
    createClientValidator,
    async(req:Request, res:Response)=>{
        try{
            const {client, user} = req.body
            const userEmail = await getByEmail(user.email)
            if(userEmail){
                return res.status(409).json('El email ya está en uso')
            }
            const userUsername = await getByUsername(user.username)
            if(userUsername){
                return res.status(409).json('El username ya está en uso')
            }
            const newClient = await createClient(client, user)
            return res.status(201).json(newClient)
        }catch(error:any){
            return res.status(500).json(error)
        }
    }
)