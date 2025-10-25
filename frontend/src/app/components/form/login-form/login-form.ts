import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessage } from '../../ui/error-message/error-message';
import { Input } from '../../ui/input/input';
import { Button } from '../../ui/button/button';
import { Router } from '@angular/router';
import { AuthService } from '@/services/auth-service';

@Component({
    selector: 'app-login-form',
    imports: [ReactiveFormsModule, ErrorMessage, Input, Button],
    templateUrl: './login-form.html',
})
export class LoginForm {
    private authService = inject(AuthService);
    private router = inject(Router);

    loginForm: FormGroup = new FormGroup({
        username: new FormControl<string>('', {
            validators: [Validators.required, Validators.minLength(3)],
        }),
        password: new FormControl<string>('', {
            validators: [Validators.required, Validators.minLength(6)],
        }),
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
        this.authService.login(this.loginForm.value).subscribe({
            next: async (user: any) => {
                console.log(user);
                this.router.navigate([
                    user.role === 'ROLE_OWNER' ? '/owner/dashboard' : '/tenant/dashboard',
                ]);
            },
        });
    }
}
