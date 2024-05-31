import express, {Request, Response} from 'express'

import {create_access_token} from './../core/security'
import { authenticate } from '../services/user.service'
import { settings } from '../core/config'
import {loginValidator} from './../validators/login.validator'

export const loginRouter = express.Router()


// POST: LoginAccessToken
loginRouter.post("/login/access-token", 
    loginValidator,
    async(req:Request, res:Response)=>{
        const {username, password} = req.body
        const user = await authenticate(username, password)
        if(!user) return res.status(404).json("Credenciales invalidas.")

        return res.status(200).json({
            "access_token": create_access_token(user.id, settings.ACCESS_TOKEN_EXPIRES_MINUTES),
            "token_type": "bearer"
        })
})