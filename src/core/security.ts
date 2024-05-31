import {sign} from 'jsonwebtoken'
import {compare, hash} from 'bcrypt'
import {settings} from './config'

export function create_access_token(
    subject:string | number,
    expires_delta:number | null = null
){
    let expire
    if(expires_delta){
        expire = Date.now() + expires_delta
    }else{
        expire = Date.now() + settings.ACCESS_TOKEN_EXPIRES_MINUTES
    }
    const to_encode = {
        "exp": expire,
        "sub": subject.toString()
    }
    const encoded_jwt = sign(to_encode, settings.SECRET_KEY)
    return encoded_jwt
}

export const hashPassword = async (password:string)=>{
    return await hash(password,10)
}

export const validatePassword = async(password:string, hashedPassword:string)=>{
    return await compare(password, hashedPassword)
}