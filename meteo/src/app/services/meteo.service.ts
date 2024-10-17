import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {  ResultResponse } from '../model/result';
import { firstValueFrom } from 'rxjs';
import { Forecast } from '../model/forecast';

/**
 * @description Util service class that exposes some methods to interact with open-meteo.com
 */
@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  http = inject(HttpClient)

  /**
   * @description Search world cities by name
   * @argument cityName a city name to search for
   * @returns a Promise on a ResultResponse type
   */
  async searchByCity(cityName: string) : Promise<ResultResponse>{
    return firstValueFrom(this.http.get<ResultResponse>(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`))
  }

  /**
   * @description Get the weather forecast for a given latitude/longitude
   * @argument lat the latitude
   * @argument lon the longitude
   * @returns a Promise on a Forecast type
   */
  async getForecast(lat : number, lon : number ) : Promise<Forecast> {
    return firstValueFrom(this.http.get<Forecast>(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&format=json&timeformat=unixtime`))
  }

}
