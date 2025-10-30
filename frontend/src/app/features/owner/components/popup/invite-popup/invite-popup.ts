import { Component, input, output } from '@angular/core';
import { PopupTemplate } from '@owner/components/popup/popup-template/popup-template';

@Component({
    selector: 'app-invite-popup',
    imports: [PopupTemplate],
    templateUrl: './invite-popup.html',
    host: {
        class: 'fixed z-100',
    },
})
export class InvitePopup {
    inviteLink = input.required<string>();

    close = output();
    copyLink = output();

    onClose() {
        this.close.emit();
    }

    onCopyLink() {
        this.copyLink.emit();
    }
}
