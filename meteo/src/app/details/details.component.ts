import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Forecast } from '../forecast';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { WeatherCodePipe } from '../weather-code.pipe';
import { DayPipe } from '../day.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatCardModule , MatButtonModule, MatTableModule, JsonPipe, WeatherCodePipe, DayPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnDestroy {
  
  data!: Forecast;
  name!: string;
  http = inject(HttpClient)
  route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:Params) => {
      let lat = params['latitude']
      let lon = params['longitude']
      this.name = params['name']

      console.log(lat,lon,this.name)

      if(lat && lon){
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&format=json&timeformat=unixtime`
        this.http.get<Forecast>(url).subscribe((data) => {
          this.data = data
        })
      }

      


    })
  }

  ngOnDestroy(): void {
    
  }
  



}
