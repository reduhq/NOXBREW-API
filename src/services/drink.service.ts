import {db} from './../db/db.server'

export const getAllPublicDrinks = async()=>{
    return await db.drink.findMany({
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
            },
        }
    })
}

export const getAllPrivateDrinks = async(client_id:number) =>{
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
            },
            favorite:{
                select:{
                    id:true,
                    client_id:true,
                    drink_id:true
                },
                where:{
                    client_id:client_id
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