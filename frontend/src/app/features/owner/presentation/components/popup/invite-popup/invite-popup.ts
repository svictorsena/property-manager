import { Component, input, output } from '@angular/core';
import { PopupLayout } from '@owner/presentation/components';

@Component({
    selector: 'app-invite-popup',
    imports: [PopupLayout],
    templateUrl: './invite-popup.html',
    host: {
        class: 'fixed z-100',
    },
})
export class InvitePopup {
    inviteLink = input.required<string>();

    close = output<void>();
    copyLink = output<void>();

    onClose() {
        this.close.emit();
    }

    onCopyLink() {
        this.copyLink.emit();
    }
}
