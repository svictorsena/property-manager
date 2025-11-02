import { Component, inject } from '@angular/core';
import { InputForm, ErrorMessage, ButtonForm } from '@/shared/components';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OwnerService } from '@/features/owner/services/owner-service';

@Component({
    selector: 'app-properties-form',
    imports: [InputForm, ErrorMessage, ButtonForm, ReactiveFormsModule],
    templateUrl: './properties-form.html',
    host: {
        class: 'w-full',
    },
})
export class PropertiesForm {
    private readonly ownerService = inject(OwnerService);

    propertiesForm = new FormGroup({
        identifier: new FormControl('', {
            validators: [Validators.required, Validators.minLength(3)],
        }),
        address: new FormControl('', {
            validators: [Validators.required, Validators.minLength(7)],
        }),
        area: new FormControl('', { validators: [Validators.required] }),
        price: new FormControl('', { validators: [Validators.required] }),
        description: new FormControl('', {
            validators: [Validators.required, Validators.minLength(10)],
        }),
    });

    get identifier() {
        return <FormControl>this.propertiesForm.get('identifier');
    }

    get address() {
        return <FormControl>this.propertiesForm.get('address');
    }

    get area() {
        return <FormControl>this.propertiesForm.get('area');
    }

    get price() {
        return <FormControl>this.propertiesForm.get('price');
    }

    get description() {
        return <FormControl>this.propertiesForm.get('description');
    }

    onSubmit() {
        if (this.propertiesForm.invalid) {
            this.propertiesForm.markAllAsTouched();
            return;
        }
        this.ownerService.addProperty(this.propertiesForm.value);
    }
}
