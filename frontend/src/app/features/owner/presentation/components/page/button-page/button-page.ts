import { Component, input, output } from '@angular/core';
import { LucideAngularModule, Plus } from 'lucide-angular';

@Component({
    selector: 'app-button-page',
    imports: [LucideAngularModule],
    standalone: true,
    templateUrl: './button-page.html',
})
export class ButtonPage {
    readonly Plus = Plus;

    action = output<void>();
    text = input.required<string>();

    onClick() {
        this.action.emit();
    }
}
