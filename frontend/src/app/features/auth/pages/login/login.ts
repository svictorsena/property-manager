import { Component } from '@angular/core';
import { LoginForm } from '@auth/components/form/login-form/login-form';
import { AuthTemplate } from '@auth/layout/auth-template/auth-template';

@Component({
    selector: 'app-auth',
    imports: [LoginForm, AuthTemplate],
    templateUrl: './login.html',
})
export class Login {}
