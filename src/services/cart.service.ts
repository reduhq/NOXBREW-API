import { cartUpdate } from '../types/cart.types'
import {db} from './../db/db.server'

export const createCart = async(client_id:number, drink_id:number, quantity:number)=>{
    return await db.cart.create({
        data:{
            client_id,
            drink_id,
            quantity
        },
        select:{
            id:true,
            client_id:true,
            drink_id:true
        }
    })
}

export const getAllCart = async(client_id:number)=>{
    return await db.cart.findMany({
        select:{
            id:true,
            drink:{
                select:{
                    id:true,
                    name:true,
                    description:true,
                    price:true,
                    image:true,
                    drink_type:{
                        select:{
                            name:true
                        }
                    },
                }
            },
            quantity:true
        },
        where:{
            client_id
        }
    })
}

export const updateCart = async(cart:cartUpdate) =>{
    return await db.cart.update({
        data:{
            quantity:cart.quantity
        },
        where:{
            id:cart.id
        }
    })
}

export const deleteCart = async(id:number)=>{
    return await db.cart.delete({
        where:{
            id
        },
        select:{
            id:true
        }
    })
}