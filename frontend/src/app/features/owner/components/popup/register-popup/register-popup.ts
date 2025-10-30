import { Component, output } from '@angular/core';
import { PopupTemplate } from '@owner/components/popup/popup-template/popup-template';
import { RegisterForm } from '@auth/shared/components/register-form/register-form';

@Component({
    selector: 'app-register-popup',
    imports: [PopupTemplate, RegisterForm],
    templateUrl: './register-popup.html',
    host: {
        class: 'fixed z-100',
    },
})
export class RegisterPopup {
    close = output();

    onClose() {
        this.close.emit();
    }
}
