export interface Customer{
    id:number;
    userId:number;
    companyName:string;
}

export interface CustomerDetail extends Customer{
    firstName:string;
    lastName:string;
}
