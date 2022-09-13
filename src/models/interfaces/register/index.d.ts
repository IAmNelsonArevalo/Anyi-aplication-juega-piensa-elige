import { ICallback } from "../general";

export interface IRegister {
    fullname: string;
    email: string;
    phone: string;
    pharmacy: string;
}

export interface IActionRegisterUser extends ICallback {
    data: IRegister
}