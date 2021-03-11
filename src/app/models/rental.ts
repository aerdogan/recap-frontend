export interface Rental{
    id:number;
    carId:number;
    customerId:number;
    rentDate:string;
    returnDate:string;
}

export interface RentalDetail{
    id:number;
    rentDate:string;
    returnDate:string;
    companyName:string;
    firstName:string;
    lastName:string;
    brandName:string;
    colorName:string;
    description:string;
    modelYear:string;
    dailyPrice:string;
}