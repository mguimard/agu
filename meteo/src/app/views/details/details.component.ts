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

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTableModule, WeatherCodePipe, DayPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnDestroy {

  data!: Forecast;
  name!: string;
  meteoService = inject(MeteoService)
  route = inject(ActivatedRoute)
  sub!: Subscription
  error: HttpErrorResponse | null = null

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(this.onRouteChanged.bind(this))
  }

  private async onRouteChanged(params: Params) {
    let lat = params['latitude']
    let lon = params['longitude']
    this.name = params['name']

    if (lat && lon) {
      try {
        this.data = await this.meteoService.getForecast(lat, lon)
        this.error = null
      } catch (e: any) {
        this.error = e
      }
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
