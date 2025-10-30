import { RegisterForm } from '@auth/shared/components/register-form/register-form';
import { Component } from '@angular/core';
import { AuthTemplate } from '@auth/layout/auth-template/auth-template';

@Component({
    selector: 'app-register-tenant',
    imports: [AuthTemplate, RegisterForm],
    templateUrl: './register.html',
})
export class Register {}
