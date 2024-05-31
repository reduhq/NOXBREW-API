

interface Client{
    id:number
    user_id:number
    name:string
    lastname:string
    birthdate:Date
    adress:string
}

export type ClientCreate = Omit<Client, 'id'|'user_id'|'birthdate'|'adress'>