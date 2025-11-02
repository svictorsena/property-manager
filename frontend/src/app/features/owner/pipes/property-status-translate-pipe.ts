import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyStatusTranslate'
})
export class PropertyStatusTranslatePipe implements PipeTransform {

  transform(value: string): string {
    const map: Record<string, string> = {
      AVAILABLE: 'disponível',
      OCCUPIED: 'ocupado'
    };

    return map[value] ?? value;
  }

}
