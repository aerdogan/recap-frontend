import { CarImage } from "./carimage";
import { ResponseModel } from "./responseModel";

export interface CarImageResponseModel extends ResponseModel{
    data:CarImage[]
}