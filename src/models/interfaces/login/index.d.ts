import { ICallback } from "../general";

export interface IActionLogin extends ICallback {
    fullname: string;
}

export interface IActionLogout extends ICallback {
    fullname: string;
}