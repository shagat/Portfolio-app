import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResData, AuthService } from "./auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './auth.component.html',
    styleUrls: [
        './auth.component.css'
    ]
})
export class AuthComponent {
    
    isLoading = false;
    error: string = null;
    

    constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }
    
    authForm: FormGroup = new FormGroup({

        'email': new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        'password': new FormControl('', [
            Validators.required,
            Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{6,30})')
        ]),
    });

    onSubmit() {
        if (this.authForm.invalid){
            return;
        }
        const email = this.authForm.get('email').value;
        const password = this.authForm.get('password').value;

        let authObs: Observable<AuthResData>;
        this.isLoading = true;
        authObs = this.authService.login(email, password);
        authObs.subscribe(responseData => {
            this.isLoading = false;
            this.router.navigate(['/works']);    
        }, errorMsg => {
            console.log(errorMsg);
            this.error = errorMsg;
            this.isLoading = false;
        });
        this.error = null;
        this.authForm.reset();
    }

    onClose() {
        this.authForm.reset();
        this.router.navigate(['works'])
    }

    onHandleError(){
        this.error = null;
    }

    getErrorMessage() {
        if (this.authForm.get('email').hasError('required')) {
            return 'You must enter a value';
        }
        if (this.authForm.get('email').hasError('email')) {
            return 'Not a valid email';
        }
        if (this.authForm.get('password').hasError('pattern')) {
            return 'Password must contain uppercase, lowercase and more than 6 characters'
        }
        return '';
    }
}