import { Component, input } from '@angular/core';

@Component({
    selector: 'app-form-button',
    imports: [],
    templateUrl: './form-button.html',
})
export class FormButton {
    text = input<string>();
}
