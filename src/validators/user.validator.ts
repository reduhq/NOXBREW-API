import {Request, Response, NextFunction} from 'express'
import {check} from 'express-validator'
import { validateResult } from '../utils/validateHelper'

export const createUserValidator = [
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

    check('email')
    .exists()
    .isString()
    .isEmail(),

    check('phone')
    .exists()
    .isString()
    .not()
    .isEmpty(),

    (req:Request, res:Response, next:NextFunction)=>{
        validateResult(req, res, next)
    }

]