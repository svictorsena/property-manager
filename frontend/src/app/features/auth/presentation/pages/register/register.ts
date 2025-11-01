import { RegisterForm } from '@/shared/components';
import { Component } from '@angular/core';
import { AuthLayout } from '@auth/layout';

@Component({
    selector: 'app-register-tenant',
    imports: [AuthLayout, RegisterForm],
    templateUrl: './register.html',
})
export class Register {}
