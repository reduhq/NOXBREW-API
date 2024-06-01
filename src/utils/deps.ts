// import {verify} from 'jsonwebtoken'
// import {settings} from './../core/config'
// import {getUser} from './../services/user.service'
// import { NextFunction, Request, Response } from 'express'

// export const verifyJWT = (req:Request, res:Response, next:NextFunction)=>{
//     const token = req.headers.authorization
//     console.log(token)
// }

// export function get_current_user(
//     token: string
// ){
//     // decoding the JWT
//     const payload = verify(token, settings.SECRET_KEY)
//     const user_id = parseInt(payload.sub as string)

// }