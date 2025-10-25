import { Component, inject } from '@angular/core';
import { Input } from '../input/input';
import { ErrorMessage } from '../error-message/error-message';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormButton } from '../form-button/form-button';
import { OwnerService } from '@/services/owner-service';

@Component({
    selector: 'app-register-form',
    imports: [Input, ErrorMessage, ReactiveFormsModule, FormButton],
    templateUrl: './register-form.html',
})
export class RegisterForm {
    ownerService = inject(OwnerService);

    registerForm = new FormGroup({
        fullName: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        tel: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        // confirmPassword: new FormControl('', Validators.required),
    });

    get fullName() {
        return <FormControl>this.registerForm.get('fullName');
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
    // get confirmPassword() {
    //     return <FormControl>this.registerForm.get('confirmPassword')!;
    // }

    onSubmit() {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        this.ownerService
            .register(this.registerForm.value)
            .subscribe({ next: (data: any) => console.log(data) });
    }
}
