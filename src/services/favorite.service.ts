import {db} from './../db/db.server'

export const createFavorite = async (client_id:number, drink_id:number) =>{
    return db.favorite.create({
        data:{
            client_id,
            drink_id
        },
        select:{
            client:true,
            drink:true
        }
    })
}

export const getFavorites = async(client_id:number)=>{
    return db.favorite.findMany({
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
                    favorite:{
                        select:{
                            id:true
                        }
                    }
                }
            }
        },
        where:{
            client_id:client_id
        }
    })
}

export const deleteFavorite = async(id:number)=>{
    return db.favorite.delete({
        where:{
            id:id
        },
        select:{
            id:true,
            client_id:true,
            drink_id:true
        }
    })
}