import { Pipe, PipeTransform } from '@angular/core';
import { Chien } from './chien';

@Pipe({
  name: 'croquette',
  standalone: true
})
export class CroquettePipe implements PipeTransform {

  transform(chien: Chien, nombreCroquettes: number = 0): Chien {
    let new_chien = {
      pattes: chien.pattes + nombreCroquettes,
      name: chien.name
    }



    return new_chien;
  }

}
