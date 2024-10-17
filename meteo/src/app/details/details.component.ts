import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Forecast } from '../forecast';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { WeatherCodePipe } from '../weather-code.pipe';
import { DayPipe } from '../day.pipe';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule , MatButtonModule, MatTableModule, JsonPipe, WeatherCodePipe, DayPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnDestroy {
  
  data!: Forecast;
  name!: string;
  meteoService = inject(MeteoService)
  route = inject(ActivatedRoute)
  sub = this.route.queryParams.subscribe(this.onRouteChanged.bind(this))
  
  private async onRouteChanged(params: Params){
    let lat = params['latitude']
    let lon = params['longitude']
    this.name = params['name']

    if(lat && lon){
      // todo : try/catch
      this.data = await this.meteoService.getForecast(lat,lon)
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
