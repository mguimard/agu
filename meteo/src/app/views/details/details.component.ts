import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Forecast } from '../../model/forecast';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { WeatherCodePipe } from '../../pipes/weather-code.pipe';
import { DayPipe } from '../../pipes/day.pipe';
import { MeteoService } from '../../services/meteo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTableModule, WeatherCodePipe, DayPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnDestroy {
 
  favoriteService = inject(FavoriteService)
  data!: Forecast;
  meteoService = inject(MeteoService)
  route = inject(ActivatedRoute)
  sub!: Subscription
  error: HttpErrorResponse | null = null
  params!: Params

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(this.onRouteChanged.bind(this))
  }

  private async onRouteChanged(params: Params) {
    this.params = params;

    if (params['latitude'] && params['longitude']) {
      try {
        this.data = await this.meteoService.getForecast(params['latitude'], params['longitude'])
        this.error = null
      } catch (e: any) {
        this.error = e
      }
    }
  }

  setAsFavorites(){
    this.favoriteService.setAsfavorite({
      id: this.params['id'],
      name: this.params['name'],
      latitude: this.params['latitude'],
      longitude: this.params['longitude'],
      country_code: this.params['country_code']
    })
  }

  removeFromFavorites(){
    this.favoriteService.removeFromFavorites(this.params['id'])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
