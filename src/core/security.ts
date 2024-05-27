import {sign} from 'jsonwebtoken'
import {Settings} from './config'

const settings = new Settings()

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
    console.log(settings.SECRET_KEY)
    console.log(encoded_jwt)
}