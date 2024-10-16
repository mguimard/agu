import { Pipe, PipeTransform } from '@angular/core';
import { WeatherCodes } from './weather-codes';

@Pipe({
  name: 'weatherCode',
  standalone: true
})
export class WeatherCodePipe implements PipeTransform {

  transform(value: number): string {
    return WeatherCodes(value).name;
  }

}
