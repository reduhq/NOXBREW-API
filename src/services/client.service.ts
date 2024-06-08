import { ClientCreate } from '../types/client.types'
import { UserCreate } from '../types/user.types'
import {db} from './../db/db.server'
import { createUser } from './user.service'

export const createClient = async(client:ClientCreate, user:UserCreate)=>{
    const newUser = await createUser(user)

    return db.client.create({
        data:{
            user_id:newUser.id,
            ...client
        },
        select:{
            id:true,
            name:true,
            lastname:true,
            birthdate:true,
            adress:true,
            user_id:true,
            user:{
                select:{
                    username:true,
                    email:true,
                    phone:true,
                    created_at:true
                }
            }
        }
    })
}

export const getClientById = async(user_id:number)=>{
    return db.client.findUnique({
        where:{
            user_id:user_id
        },
        select:{
            id:true,
            name:true,
            lastname:true,
            adress:true,
            birthdate:true
        }
    })
}