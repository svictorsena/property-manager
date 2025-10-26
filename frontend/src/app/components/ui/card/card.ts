import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [LucideAngularModule],
    templateUrl: './card.html',
    host: {
        class: 'w-1/4',
    },
})
export class Card {
    color = input<string>("black")
    title = input.required<string>();
    text = input.required<string>();
    subtext = input.required<string>();
    icon = input.required<LucideIconData>();
}
