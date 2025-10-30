import { Component, input } from '@angular/core';

@Component({
    selector: 'app-title-page',
    imports: [],
    templateUrl: './title-page.html',
})
export class TitlePage {
    title = input.required<string>();
    subTitle = input.required<string>();
}
