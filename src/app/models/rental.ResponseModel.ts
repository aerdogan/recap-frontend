import { Rental, RentalDetail } from "./rental";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:Rental[]
}

export interface RentalDetailsResponseModel extends ResponseModel{
    data:RentalDetail[]
}