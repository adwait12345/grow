interface IProduct {
id: number
title: string
price: number
image: string
quantity: number
}

interface ICart {
    address: string
    phone:string
    promo:string
    purchase: IProduct[]
    orderAmt: number
    deliveryFee: number
    discount:number
    total: number
    method:Array
}

interface IMerch {
merchantName:string,
merchantLogo:string,
theme:{
    background:string,
    forground:string,
    primary: string,
    primary_forground:string
}
}

