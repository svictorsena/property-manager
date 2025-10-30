import { Component, output } from '@angular/core';
import { PopupLayout } from '@/features/owner/presentation/components/popup/popup-layout/popup-layout';
import { RegisterForm } from '@/features/shared/components/register-form/register-form';

@Component({
    selector: 'app-register-popup',
    imports: [PopupLayout, RegisterForm],
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
