import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { ResultsComponent } from "../results/results.component";

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
