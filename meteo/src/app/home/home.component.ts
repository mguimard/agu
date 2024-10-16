import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { ResultsComponent } from "../results/results.component";
import { Result } from '../result';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data: Result[] = [
    {
      id: 123,
      latitude: 0,
      longitude: 0,
      name: "Brest",
      country_code: "FR"
    },
    {
      id: 1234,
      latitude: 0,
      longitude: 0,
      name: "Paris",
      country_code: "FR"
    }
  ];

}
