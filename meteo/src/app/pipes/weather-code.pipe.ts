import { Pipe, PipeTransform } from '@angular/core';

/*
0 	Clear sky
1, 2, 3 	Mainly clear, partly cloudy, and overcast
45, 48 	Fog and depositing rime fog
51, 53, 55 	Drizzle: Light, moderate, and dense intensity
56, 57 	Freezing Drizzle: Light and dense intensity
61, 63, 65 	Rain: Slight, moderate and heavy intensity
66, 67 	Freezing Rain: Light and heavy intensity
71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
77 	Snow grains
80, 81, 82 	Rain showers: Slight, moderate, and violent
85, 86 	Snow showers slight and heavy
95 * 	Thunderstorm: Slight or moderate
96, 99 * 	Thunderstorm with slight and heavy hail
*/

const GetWeatherFromCode = (code: number) : string => {
  switch (code) {
      case 0: return 'Beau' 
      case 1: return 'A peu près beau' 
      case 2: return 'Pas ouf' 
      case 3: return 'Couvert' 
      case 45: return 'Brouillard' 
      case 48: return 'Brouillard givrant' 
      case 51 : return 'Crachin' 
      case 53 : return 'Bon Crachin' 
      case 55 : return 'Bon gros Crachin' 
      
      case 61 : return 'Pluie' 
      case 63 : return 'Bonne Pluie' 
      case 65 : return 'Bonne grosse Pluie' 

      case 80 : return 'Averses' 
      case 81 : return 'Bonnes Averses' 
      case 82 : return 'Bonnes grosses Averses' 
      default:  return  'Tout pourri (code ' + code + ')' 
  }
}

@Pipe({
  name: 'weatherCode',
  standalone: true
})
export class WeatherCodePipe implements PipeTransform {

  transform(value: number): string {
    return GetWeatherFromCode(value);
  }

}
