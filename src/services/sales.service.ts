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
    // Creating a sale Register
    const sale = await db.sale.create({
        data:{
            client_id
        }
    })
    ;const items = cart.map(c=>({
        "sale_id":sale.id,
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
    // creating the saleDetail
    return await db.saleDetail.createManyAndReturn({
        data:items
    }) 
}

export const getAllSales = async(client_id:number)=>{
    return await db.sale.findMany({
        select:{
            id:true,
            date:true,
            sale_detail:{
                select:{
                    id:true,
                    drink:{
                        select:{
                            name:true,
                            image:true
                        }
                    },
                    price:true,
                    quantity:true
                }
            }
        },
        where:{
            client_id
        },
        orderBy:{
            date:'desc'
        }
    })
}