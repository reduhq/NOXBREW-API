import {verify} from 'jsonwebtoken'
import {settings} from './../core/config'
import {getUser} from './../services/user.service'

export function get_current_user(
    token: string
){
    // decoding the JWT
    const payload = verify(token, settings.SECRET_KEY)
    const user_id = parseInt(payload.sub as string)

    // Getting the user by id
    const user = getUser(user_id)
    return user
    // throw new Error('message')
}