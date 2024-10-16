import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day',
  standalone: true
})
export class DayPipe implements PipeTransform {

  transform(value: number): string {
    
    return new Date(value * 1000).toLocaleDateString();

  }

}
