export interface ResponseModel{
    success:boolean,
    message:string
}

export interface SingleResponseModel<T> extends ResponseModel{
    data:T;
}

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}