import { Component } from '@angular/core';
import { LoginForm } from '@auth/presentation/components/form/login-form/login-form';
import { AuthLayout } from '@auth/presentation/layout/auth-layout/auth-layout';

@Component({
    selector: 'app-auth',
    imports: [LoginForm, AuthLayout],
    templateUrl: './login.html',
})
export class Login {}
