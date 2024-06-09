import { Request, Response, NextFunction } from 'express'
import {param} from 'express-validator'
import { validateResult } from '../utils/validateHelper'

export const deleteFavoriteValidator = [
    param('favorite_id')
    .exists()
    .isInt()
    .not()
    .isEmpty(),

    (req:Request, res:Response, next:NextFunction)=>{
        validateResult(req, res, next)
    }
]