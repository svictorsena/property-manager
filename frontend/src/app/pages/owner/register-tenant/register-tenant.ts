import { RegisterForm } from '@/components/register-form/register-form';
import { TenantService } from '@/services/tenant-service';
import { Component, inject } from '@angular/core';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { LucideAngularModule, Building2 } from 'lucide-angular';

@Component({
    selector: 'app-register-tenant',
    imports: [LucideAngularModule, RegisterForm],
    templateUrl: './register-tenant.html',
})
export class RegisterTenant {
    readonly Building2 = Building2;
}
