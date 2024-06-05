import {db} from './../db/db.server'

export const getAllDrinks = async()=>{
    return db.drink.findMany({
        select:{
            id:true,
            name:true,
            description:true,
            image:true,
            price:true,
            drink_type:{
                select:{
                    name:true
                }
            }
        }
    })
}