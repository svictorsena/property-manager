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

    getErrorMessage(): string | null {
        if (!this.control() || !this.control()!.touched || !this.control()!.errors) return null;

        const errors = this.control()!.errors!;

        if (errors['required']) return 'Campo obrigatório';
        if (errors['minlength']) {
            const requiredLength = errors['minlength'].requiredLength;
            return `Mínimo de ${requiredLength} caracteres`;
        }
        if (errors['maxlength']) {
            const requiredLength = errors['maxlength'].requiredLength;
            return `Máximo de ${requiredLength} caracteres`;
        }
        if (errors['pattern']) return 'Formato inválido';

        return null;
    }
}
