import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

export interface Forecast {
  day: string;
  weather: string;
  temperature: number;
}

const data: Forecast[] = [
  {day: "lundi", weather: 'SOLEIL', temperature: 32},
  {day: "mardi", weather: 'PLUIE', temperature: 28},

];

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  displayedColumns: string[] = ['day', 'weather', 'temperature'];
  dataSource = data;
}
