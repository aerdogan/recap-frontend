import { Customer, CustomerDetail } from "./customer";
import { ResponseModel } from "./responseModel";

export interface CustomerResponseModel extends ResponseModel{
    data:Customer[]
}

export interface CustomerDetailsResponseModel extends ResponseModel{
    data:CustomerDetail[]
}