import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";

import { environment } from "src/environments/environment";
import { User } from "./user.model";
export interface AuthResData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean

}
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer : any;

    constructor(private httpClient: HttpClient, private router: Router) { }

    login(email: string, password: string) {
        return this.httpClient.post<AuthResData>('https://my-protfolio-fb050-default-rtdb.asia-southeast1.firebasedatabase.app/' + environment.firebaseApiKey, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError),
            tap(resData => {
                this.handleAuthentication(
                    resData.email,
                    resData.localId,
                    resData.idToken,
                    +resData.expiresIn
                )
            }
            )
        );
    }

    logout(){
        this.user.next(null);
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
        if (this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number){
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    autoLogin(){
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData){
            return null;
        }
        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    private handleAuthentication(
        email: string,
        userId: string,
        token: string,
        expiresIn: number) {
        const expirationDate = new Date(
            new Date().getTime() + expiresIn * 1000
        );
        const user = new User(
            email, userId,
            token, expirationDate);
        this.user.next(user);
        this.autoLogout((expiresIn * 1000));
        localStorage.setItem('userData', JSON.stringify(user));
    }


    private handleError(errorRes: HttpErrorResponse) {
        let errorMsg = 'Unexpected error occured';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => {
                return (errorMsg)
            });
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMsg = 'Email already exists.';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMsg = 'The email is not valid.';
                break;
            case 'INVALID_PASSWORD':
                errorMsg = 'The password is incorrect.';
                break;
        }
        return throwError(() => {
            return (errorMsg)
        }
        )
    }
}