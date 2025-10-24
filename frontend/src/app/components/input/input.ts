import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    imports: [],
    templateUrl: './input.html',
})
export class Input {
    label = input<string>();
    type = input<string>();
    control = input<FormControl>();
}
