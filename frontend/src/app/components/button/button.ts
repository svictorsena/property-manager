import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  text = input<string>();
  isFormSelected = input<boolean>();
  selectForm = output();

  onSelectForm() {
    this.selectForm.emit();
  }
}
