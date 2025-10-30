import { Component } from '@angular/core';
import { Building2, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-building',
  imports: [LucideAngularModule],
  templateUrl: './building.html',
})
export class Building {
  readonly Building2 = Building2;
}
