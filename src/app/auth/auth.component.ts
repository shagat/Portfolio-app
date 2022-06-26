import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './auth.component.html',
    styleUrls: [
        './auth.component.css'
    ]
})
export class AuthComponent {
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{6, 20}$/)])

    getErrorMessage(){
        if (this.email.hasError('required')) {
            return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email': '';
    }
}