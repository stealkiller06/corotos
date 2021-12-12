export interface Article {
    id:string,
    name:string,
    image:string,
    price:number,
    description:string,
    user:User
}


export interface User{
    name:string,
    profileImage:string
}