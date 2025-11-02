import { Component, output } from '@angular/core';
import { PopupLayout } from '../popup-layout/popup-layout';
import { PropertiesForm } from '../../forms/properties-form/properties-form';

@Component({
    selector: 'app-properties-popup',
    imports: [PopupLayout, PropertiesForm],
    templateUrl: './properties-popup.html',
    host: {
        class: 'fixed z-100',
    },
})
export class PropertiesPopup {
    close = output<void>();
    invalidateQuery = output<void>();

    onClose() {
        this.invalidateQuery.emit();
        this.close.emit();
    }
}
