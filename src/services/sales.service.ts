import {db} from './../db/db.server'

export const createSale = async(client_id:number)=>{
    // Getting the items in the cart
    const cart = await db.cart.findMany({
        select:{
            id:true,
            drink:{
                select:{
                    id:true,
                    price:true,
                }
            },
            quantity:true
        },
        where:{
            client_id
        }
    })
    ;const items = cart.map(c=>({
        "client_id":client_id,
        'drink_id': c.drink.id,
        'price': c.drink.price,
        'quantity':c.quantity
    }))
    // deleting all the items in the cart
    await db.cart.deleteMany({
        where:{
            client_id
        }
    })
    // creating the sales
    return await db.sales.createManyAndReturn({
        data:items
    }) 
}