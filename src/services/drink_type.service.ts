
import { db } from "../db/db.server";

export const getAllDrinkTypes = async()=>{
    return await db.drinkType.findMany({
        select:{
            id:true,
            name:true
        }
    })
}