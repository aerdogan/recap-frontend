export interface LoginModel{
    email:string;
    password:string;
}

export interface RegisterModel extends LoginModel {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}