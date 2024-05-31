import { UserCreate } from '../types/user.types'
import {db} from './../db/db.server'

export const getUser = async (id:number)=>{
    return db.user.findUnique({
        where:{
            id
        }
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