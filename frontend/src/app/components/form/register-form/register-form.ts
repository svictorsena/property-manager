import { AuthService } from '@/services/auth-service';
import { Component, inject } from '@angular/core';
import { Input } from '../../ui/input/input';
import { ErrorMessage } from '../../ui/error-message/error-message';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from '../../ui/button/button';
import { OwnerService } from '@/services/owner-service';
import { mustBeNumberValidator } from '@/util/mustBeNumberValidator';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-register-form',
    imports: [Input, ErrorMessage, ReactiveFormsModule, Button],
    templateUrl: './register-form.html',
    host: {
        class: 'w-full',
    },
})
export class RegisterForm {
    authService = inject(AuthService);
    ownerService = inject(OwnerService);
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
            this.ownerService.register(this.registerForm.value).subscribe(res => console.log(res));
            return;
        }
        this.authService.register(
            this.registerForm.value,
            this.activedRoute.snapshot.queryParams['token']
        ).subscribe(res => console.log(res));
    }
}
