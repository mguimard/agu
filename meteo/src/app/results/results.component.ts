import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

export interface Result {
  city: string;
  weather: string;
}

const data: Result[] = [
  {city: "Brest", weather: 'SOLEIL'},
  {city: "Brast", weather: 'PLUIE'},

];
@Component({
  selector: 'app-results',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  providers:[HttpClient],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  dataSource:Result[] = data;
  displayedColumns: string[] = ['city', 'weather', 'favorite'];
}
