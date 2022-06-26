import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './auth.component.html',
    styleUrls: [
        './auth.component.css'
    ]
})
export class AuthComponent {
    constructor(private router: Router, private route: ActivatedRoute){}
authForm: FormGroup = new FormGroup({

    'email': new FormControl('', [
        Validators.required, 
        Validators.email
    ]),
    'password': new FormControl('', [
        Validators.required, 
        Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30})')
    ]),
});

    onSubmit(){
        console.log(this.authForm.value);
        this.authForm.reset();
    }

    onClose(){
        this.authForm.reset();
        this.router.navigate(['works'])
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