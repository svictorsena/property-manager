import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessage } from '../error-message/error-message';
import { Input } from '../input/input';
import { FormButton } from '../form-button/form-button';

@Component({
    selector: 'app-login-form',
    imports: [ReactiveFormsModule, ErrorMessage, Input, FormButton],
    templateUrl: './login-form.html',
})
export class LoginForm {
    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    get username() {
        return <FormControl>this.loginForm.get('username');
    }

    get password() {
        return <FormControl>this.loginForm.get('password')!;
    }

    onSubmit() {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        console.log(this.loginForm.value);
    }
}
