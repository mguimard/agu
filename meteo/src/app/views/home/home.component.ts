import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { ResultsComponent } from "../../components/results/results.component";
import { Result } from '../../model/result';
import { ActivatedRoute, Params } from '@angular/router';
import { MeteoService } from '../../services/meteo.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy, OnInit {
  route = inject(ActivatedRoute)
  meteoService = inject(MeteoService)
  db = inject(NgxIndexedDBService)
  data: Result[] = [];
  sub!: Subscription;
  currentSearch:string = ''
  error: HttpErrorResponse | null = null;

  ngOnInit(): void {
    this.db.getAll('people').subscribe()
    this.sub = this.route.params.subscribe(this.onRouteChanged.bind(this));
  }

  private async onRouteChanged(params: Params) {
    if (params['city']) {
      
      this.currentSearch = params['city']
      try{
        this.data = (await this.meteoService.searchByCity(this.currentSearch)).results
        this.error = null
      } catch(e: any) {
        this.error = e
      }
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
