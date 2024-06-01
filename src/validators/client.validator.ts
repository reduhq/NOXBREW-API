import {Request, Response, NextFunction} from 'express'
import {check} from 'express-validator'
import { validateResult } from '../utils/validateHelper'

export const createClientValidator = [
    check('user.username')
    .exists()
    .isString()
    .not()
    .isEmpty(),

    check('user.password')
    .exists()
    .isString()
    .not()
    .isEmpty(),

    check('user.email')
    .exists()
    .isString()
    .isEmail(),

    check('client.name')
    .exists()
    .isString()
    .not()
    .isEmpty(),
    
    check('client.lastname')
    .exists()
    .isString()
    .not()
    .isEmpty(),

    (req:Request, res:Response, next:NextFunction)=>{
        validateResult(req, res, next)
    }

]