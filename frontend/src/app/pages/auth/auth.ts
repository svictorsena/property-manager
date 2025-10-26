import { Component } from '@angular/core';
import { LoginForm } from '@/components/form/login-form/login-form';
import { AuthCard } from "@/components/ui/auth-card/auth-card";

@Component({
    selector: 'app-auth',
    imports: [LoginForm, AuthCard],
    templateUrl: './auth.html',
})
export class Auth {
}
