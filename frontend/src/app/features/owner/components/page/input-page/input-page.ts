import { Component, input } from '@angular/core';
import { LucideAngularModule, Search } from "lucide-angular";

@Component({
  selector: 'app-input-page',
  imports: [LucideAngularModule],
  templateUrl: './input-page.html',
})
export class InputPage {
  readonly Search = Search;

  placeholder = input.required<string>()
}
