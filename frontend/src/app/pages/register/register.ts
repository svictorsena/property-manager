import { RegisterForm } from '@/components/form/register-form/register-form';
import { Component } from '@angular/core';
import { AuthCard } from "@/components/ui/auth-card/auth-card";

@Component({
    selector: 'app-register-tenant',
    imports: [AuthCard, RegisterForm],
    templateUrl: './register.html',
})
export class Register {
}
