import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessage } from '@auth/presentation/components';
import { InputForm } from '@auth/presentation/components';
import { ButtonForm } from '@auth/presentation/components';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth-service';

@Component({
    selector: 'app-login-form',
    imports: [ReactiveFormsModule, ErrorMessage, InputForm, ButtonForm],
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
