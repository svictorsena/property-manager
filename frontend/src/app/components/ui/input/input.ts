import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
    templateUrl: './input.html',
})
export class Input {
    label = input<string>();
    type = input<string>();
    control = input<FormControl>();
}
