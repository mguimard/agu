import { Pipe, PipeTransform } from '@angular/core';
import { Chien } from './chien';

@Pipe({
  name: 'coupePatte',
  standalone: true
})
export class CoupePattePipe implements PipeTransform {

  transform(chien: Chien): Chien {
    
    return {
      name: chien.name,
      pattes: chien.pattes - 1
    }
    
  }

}
