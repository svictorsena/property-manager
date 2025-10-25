import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessage } from '../error-message/error-message';
import { Input } from '../input/input';
import { FormButton } from '../form-button/form-button';
import { AuthService } from '@/services/auth/auth-service';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    imports: [ReactiveFormsModule, ErrorMessage, Input, FormButton],
    templateUrl: './login-form.html',
})
export class LoginForm {
    auth = inject(AuthService);
    router = inject(Router);

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

    async onSubmit() {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        this.auth.login(this.loginForm.value).subscribe({
            next: async (user: any) => {
                console.log(user);
                this.router.navigate([
                    user.role === 'ROLE_OWNER' ? '/owner/dashboard' : '/tenant/dashboard',
                ]);
            },
        });
    }
}
