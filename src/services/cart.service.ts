import {db} from './../db/db.server'

export const createCart = async(client_id:number, drink_id:number)=>{
    return db.cart.create({
        data:{
            client_id,
            drink_id
        },
        select:{
            id:true,
            client_id:true,
            drink_id:true
        }
    })
}

export const getAllCart = async(client_id:number)=>{
    return db.cart.findMany({
        select:{
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
            }
        },
        where:{
            client_id
        }
    })
}