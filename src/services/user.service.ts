import { User } from '@prisma/client'
import { UserCreate } from '../types/user.types'
import {db} from './../db/db.server'

export const getById = async (id:number)=>{
    return db.user.findUnique({
        where:{
            id
        }
    })
}

export const getByUsername = async (username:string):Promise<User|null>=>{
    return db.user.findUnique({
        where:{username}
    })
}

export const createUser = async (user:UserCreate)=>{
    return await db.user.create({
        data:{
            ...user
        },
        select:{
            id:true,
            username:true,
            email:true,
            phone:true,
            createdAt:true
        }
    })
}

export const authenticate = async(username:string, password:string)=>{
    const user = await getByUsername(username)
    if(!user) return null
    if(password != user.password) return null
    return user
}