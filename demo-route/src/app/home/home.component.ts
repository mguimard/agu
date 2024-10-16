import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Result {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface ResultResponse {
  results : Result[]
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  results : Result[] = []

  constructor(private http: HttpClient){}

  doRequest(text:string){
    this.http.get<ResultResponse>
      ('https://geocoding-api.open-meteo.com/v1/search?name='+text)
      .subscribe((data) => {
        this.results = data.results;
       // console.log(data.results.length)
      })


  }

}
