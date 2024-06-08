import {verify} from 'jsonwebtoken'
import {settings} from './../core/config'
import { NextFunction, Request, Response } from 'express'
import { getClientById } from '../services/client.service'

export const verifyJWT = (req:Request, res:Response, next:NextFunction)=>{
    const token = req.headers.authorization
    if(!token) return res.status(403).json('Usuario no autorizado')
    try {
        const valid_token = verify(token.split(" ")[1], settings.SECRET_KEY)
        res.locals.user_id = parseInt(valid_token.sub as string, 10)
    } catch (error:any) {
        return res.status(500).json("Token invalido")
    }
    return next()
}

export const getCurrentClient = async(_req:Request, res:Response, next:NextFunction)=>{
    const user_id = res.locals.user_id
    res.locals.client_model = await getClientById(user_id)
    next()
}