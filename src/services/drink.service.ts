import { Drink } from '../types/drink'
import {db} from './../db/db.server'

export const getAllPublicDrinks = async(category:string)=>{
    if(category != "todo"){
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
            },
            where:{
                drink_type:{
                    name:category
                }
            }
        })
    }
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

export const getAllPrivateDrinks = async(client_id:number, category:string) =>{
    if(category != "todo"){
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
            },
            where:{
                drink_type:{
                    name:category
                }
            }
        })
    }
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
    const result:Array<Drink> = await db.$queryRaw`
        SELECT * FROM "Drink"
        WHERE LOWER(unaccent(name)) = ${name}
        LIMIT 1
    `;
    return result[0]
}