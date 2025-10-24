import { Component } from '@angular/core';
import { LoginForm } from "@/components/login-form/login-form"
import { LucideAngularModule, Building2 } from 'lucide-angular';

@Component({
    selector: 'app-auth',
    imports: [LoginForm, LucideAngularModule],
    templateUrl: './auth.html',
})
export class Auth {
    readonly Building2 = Building2;
}
