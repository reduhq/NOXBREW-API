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