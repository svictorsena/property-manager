import { Component, signal } from '@angular/core';
import { LoginForm } from "@/components/login-form/login-form"
import { RegisterForm } from '@/components/register-form/register-form';
import { LucideAngularModule, Building2 } from 'lucide-angular';
import { Button } from '@/components/button/button';

@Component({
    selector: 'app-auth',
    imports: [LoginForm, RegisterForm, LucideAngularModule, Button],
    templateUrl: './auth.html',
})
export class Auth {
    readonly Building2 = Building2;

    isLoginSelected = signal<boolean>(true);
    isRegisterSelected = signal<boolean>(false);

    selectLogin() {
        this.isLoginSelected.set(true);
        this.isRegisterSelected.set(false);
    }

    selectRegister() {
        this.isRegisterSelected.set(true);
        this.isLoginSelected.set(false);
    }
}
