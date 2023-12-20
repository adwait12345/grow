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
    purchase: IProduct[]
    orderAmt: number
    deliveryFee: number
    discount:number
    total: number
    method:Array
}