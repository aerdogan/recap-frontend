export interface Car{
    id:number;
    name:string;
    brandId:number;
    colorId:number;
    modelYear:number;
    dailyPrice:number;
    description:string;
}

export interface CarDetail extends Car{
    colorName:string;
    brandName:string;
}
