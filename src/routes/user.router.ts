import express, {Request, Response} from 'express'
import * as userService from './../services/user.service'
import { createUserValidator } from '../validators/user.validator'

export const userRouter = express.Router()

//POST: Create a new User
userRouter.post(
    '/',
    createUserValidator,
    async (req:Request, res:Response)=>{
        try{
            const {email, phone, username, password} = req.body
            const newUser = await userService.createUser({
                email, 
                phone, 
                username, 
                password
            })
            return res.status(201).json(newUser)
        }catch(error:any){
            return res.status(500).json(error)
        }
    }
)
