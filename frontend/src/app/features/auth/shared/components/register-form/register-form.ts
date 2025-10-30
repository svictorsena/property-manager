import { AuthService } from '@auth/services/auth-service';
import { Component, inject } from '@angular/core';
import { InputForm } from '@auth/components/form/input-form/input-form';
import { ErrorMessage } from '@auth/components/form/error-message/error-message';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonForm } from '@auth/components/form/button-form/button-form';
import { mustBeNumberValidator } from '@auth/utils/mustBeNumberValidator';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-register-form',
    imports: [InputForm, ErrorMessage, ReactiveFormsModule, ButtonForm],
    templateUrl: './register-form.html',
    host: {
        class: 'w-full',
    },
})
export class RegisterForm {
    authService = inject(AuthService);
    activedRoute = inject(ActivatedRoute);

    registerForm = new FormGroup({
        fullName: new FormControl('', {
            validators: [Validators.required, Validators.minLength(8)],
        }),
        username: new FormControl('', {
            validators: [Validators.required, Validators.minLength(3)],
        }),
        tel: new FormControl('', { validators: [Validators.required, mustBeNumberValidator()] }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)],
        }),
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
        if (this.activedRoute.routeConfig?.path?.includes('owner')) {
            this.authService.registerTenantByInvite(this.registerForm.value);
            return;
        }
        this.authService.register(
            this.registerForm.value,
            this.activedRoute.snapshot.queryParams['token']
        );
    }
}
