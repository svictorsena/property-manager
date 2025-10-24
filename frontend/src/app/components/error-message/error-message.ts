import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-error-message',
    imports: [],
    templateUrl: './error-message.html',
})
export class ErrorMessage {
    message = input<string>();
    control = input<FormControl>();
}
