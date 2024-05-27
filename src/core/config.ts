import crypto from 'crypto'

export class Settings{
    SECRET_KEY = crypto.randomBytes(32).toString('hex')
    ACCESS_TOKEN_EXPIRES_MINUTES:number = 60 * 1000
    ALGORITHM:String = "HS256"
}