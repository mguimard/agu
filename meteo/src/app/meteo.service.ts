import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  ResultResponse } from './result';
import { firstValueFrom } from 'rxjs';
import { Forecast } from './forecast';

/**
 * @description Util service class that exposes some webservices
 */
@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  http = inject(HttpClient)

  /**
   * @description Search world cities by name
   * @argument cityName a city name to search for
   * @returns a Promise on a ResultResponse
   */
  async searchByCity(cityName: string) : Promise<ResultResponse>{
    return firstValueFrom(this.http.get<ResultResponse>(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`))
  }

  async getForecast(lat : number, lon : number ) : Promise<Forecast> {
    return firstValueFrom(this.http.get<Forecast>(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&format=json&timeformat=unixtime`))
  }

}
