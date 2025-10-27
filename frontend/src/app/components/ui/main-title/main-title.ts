import { Component, input } from '@angular/core';

@Component({
    selector: 'app-main-title',
    imports: [],
    templateUrl: './main-title.html',
})
export class MainTitle {
    title = input.required<string>();
    subTitle = input.required<string>();
}
