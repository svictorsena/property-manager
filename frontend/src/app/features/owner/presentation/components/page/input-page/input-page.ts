import { Component, effect, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
    selector: 'app-input-page',
    imports: [LucideAngularModule, FormsModule],
    templateUrl: './input-page.html',
})
export class InputPage {
    readonly Search = Search;

    placeholder = input.required<string>();
    search = output<string>();

    value = signal('');

    constructor() {
        effect(() => {
            this.search.emit(this.value())
        });
    }
}
