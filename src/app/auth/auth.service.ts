import { Injectable } from "@angular/core";
export interface AuthResData{
    idToken: string;
    email: string;
    refreshToekn: string;
    expiresIn: string;
    registered?: boolean

}
@Injectable({
    providedIn: 'root'
})
export class AuthService{
    login(){

    }
}