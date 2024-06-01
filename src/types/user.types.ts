

enum Role{
    ADMIN,
    CLIENT,
    SUCURSAL
}

export interface User{
    id:number
    username:string
    password:string
    email:string
    phone:string
    role:Role
    createdAt:Date
}

export type UserCreate = Omit<User, 'id'|'role'|'createdAt'|'phone'>