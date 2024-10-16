import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Forecast } from '../forecast';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, JsonPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  
  data: Forecast = {
    "latitude": 48.36,
    "longitude": -4.26,
    "current": {             // Météo courrante
      "time": 1729017900,
      "temperature_2m": 18.4,
      "weather_code": 3
    },
    "daily": {               // Prévisions 7 jours
      "time": [1728950400, 1729036800, 1729123200, 1729209600, 1729296000, 1729382400, 1729468800],
      "weather_code": [61, 63, 3, 53, 63, 63, 63],
      "temperature_2m_max": [19.8, 19.2, 16.2, 16.3, 16.1, 17.7, 16.5],
      "temperature_2m_min": [13.6, 14.8, 11.5, 9.8, 12.7, 14.3, 9.6]
    }
  };
}
