import { Component, output } from '@angular/core';
import { PopupLayout } from '@owner/presentation/components';
import { RegisterForm } from '@/shared/components';

@Component({
    selector: 'app-register-popup',
    imports: [PopupLayout, RegisterForm],
    templateUrl: './register-popup.html',
    host: {
        class: 'fixed z-100',
    },
})
export class RegisterPopup {
    close = output<void>();
    invalidateQuery = output<void>();

    onClose() {
        this.close.emit();
        this.invalidateQuery.emit()
    }
}
