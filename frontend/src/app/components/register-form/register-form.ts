import { Component, inject } from '@angular/core';
import { Input } from '../input/input';
import { ErrorMessage } from '../error-message/error-message';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormButton } from '../form-button/form-button';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { TenantService } from '@/services/tenant/tenant-service';

@Component({
    selector: 'app-register-form',
    imports: [Input, ErrorMessage, ReactiveFormsModule, FormButton],
    templateUrl: './register-form.html',
})
export class RegisterForm {
    tenant = inject(TenantService)
    
    registerForm = new FormGroup({
        completeName: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        tel: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        // confirmPassword: new FormControl('', Validators.required),
    });

    get completeName() {
        return <FormControl>this.registerForm.get('completeName');
    }
    get username() {
        return <FormControl>this.registerForm.get('username');
    }
    get tel() {
        return <FormControl>this.registerForm.get('tel');
    }

    get password() {
        return <FormControl>this.registerForm.get('password')!;
    }
    // get confirmPassword() {
    //     return <FormControl>this.registerForm.get('confirmPassword')!;
    // }

    registerMutation = injectMutation(() => ({
        mutationFn: (data: any) => this.tenant.register(data),
        onSuccess: () => console.log('rapaz foi'),
    }));

    onSubmit() {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        this.registerMutation.mutate(this.registerForm.value);
    }
}
