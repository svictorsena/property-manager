import { Component } from '@angular/core';
import { Input } from '../input/input';
import { ErrorMessage } from '../error-message/error-message';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormButton } from "../form-button/form-button";

@Component({
    selector: 'app-register-form',
    imports: [Input, ErrorMessage, ReactiveFormsModule, FormButton],
    templateUrl: './register-form.html',
})
export class RegisterForm {
    registerForm = new FormGroup({
        completeName: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        tel: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
    });

    get completeName() {
        return <FormControl>this.registerForm.get('completeName');
    }
    get username() {
        return <FormControl>this.registerForm.get('username');
    }
    get tel() {
        return <FormControl>this.registerForm.get('tel');
    }

    get password() {
        return <FormControl>this.registerForm.get('password')!;
    }
    get confirmPassword() {
        return <FormControl>this.registerForm.get('confirmPassword')!;
    }
    onSubmit() {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        console.log(this.registerForm.value);
    }
}
