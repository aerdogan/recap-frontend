export interface Rental{
    id:number;
    carId:number;
    customerId:number;
    rentDate:Date;
    returnDate:Date;
}

export interface RentalDetail extends Rental{
    companyName:string;
    firstName:string;
    lastName:string;
    brandName:string;
    colorName:string;
    description:string;
    modelYear:number;
    dailyPrice:number;
}

