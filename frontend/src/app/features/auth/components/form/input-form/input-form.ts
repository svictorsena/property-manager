import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    imports: [ReactiveFormsModule],
    templateUrl: './input-form.html',
})
export class InputForm {
    label = input<string>();
    type = input<string>();
    control = input<FormControl>();
}
