import { RegisterForm } from '@/components/register-form/register-form';
import { Component } from '@angular/core';
import { LucideAngularModule, Building2 } from 'lucide-angular';

@Component({
  selector: 'app-register-tenant',
  imports: [LucideAngularModule, RegisterForm],
  templateUrl: './register-tenant.html',
})
export class RegisterTenant {
  readonly Building2 = Building2;
}
