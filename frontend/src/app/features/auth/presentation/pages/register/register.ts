import { RegisterForm } from '@/features/shared/components/register-form/register-form';
import { Component } from '@angular/core';
import { AuthLayout } from '@auth/presentation/layout/auth-layout/auth-layout';

@Component({
    selector: 'app-register-tenant',
    imports: [AuthLayout, RegisterForm],
    templateUrl: './register.html',
})
export class Register {}
