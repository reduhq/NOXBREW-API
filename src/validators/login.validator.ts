import { Request, Response, NextFunction } from 'express'
import {check} from 'express-validator'
import { validateResult } from '../utils/validateHelper'

export const loginValidator = [
    check('username')
    .exists()
    .isString()
    .not()
    .isEmpty(),
    
    check('password')
    .exists()
    .isString()
    .not()
    .isEmpty(),

    (req:Request, res:Response, next:NextFunction)=>{
        validateResult(req, res, next)
    }
]