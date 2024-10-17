import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { ResultsComponent } from "../results/results.component";
import { Result } from '../result';
import { ActivatedRoute, Params } from '@angular/router';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  route = inject(ActivatedRoute)
  meteoService = inject(MeteoService)

  data: Result[] = [];

  ngOnInit() {
    this.route.params.subscribe(this.onRouteChanged.bind(this))
  }

  private async onRouteChanged(params: Params) {
    if (params['city']) {
      let res = await this.meteoService.searchByCity(params['city'])
      this.data = res.results
    }
  }

  ngOnDestroy(): void {
    // todo cleanup
  }

}
