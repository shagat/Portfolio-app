import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
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

    constructor(private httpClient: HttpClient, private router: Router){}
    login(email: string, password: string){
        return this.httpClient
    }
}