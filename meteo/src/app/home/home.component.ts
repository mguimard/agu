import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { ResultsComponent } from "../results/results.component";
import { Result } from '../result';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  http = inject(HttpClient)
  route = inject(ActivatedRoute)

  data: Result[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {

      

      if (!params['city']) {
        return
      }

      let url = `https://geocoding-api.open-meteo.com/v1/search?name=${params['city']}`
     
      this.http.get<{ results: Result[] }>(url).subscribe((res) => {
        this.data = res.results;
      })

    })
  }
  ngOnDestroy(): void {
   // todo cleanup
  }

}
