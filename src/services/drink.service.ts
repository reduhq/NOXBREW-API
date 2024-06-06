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

export const getDrinkByName = async(name:string) =>{
    return db.drink.findFirst({
        where:{
            name:{
                equals:name,
                mode:'insensitive'
            }
        },
        select:{
            id:true,
            name:true,
            description:true,
            price:true,
            image:true
        }
    })
}