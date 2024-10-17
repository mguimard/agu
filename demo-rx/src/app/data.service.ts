import { Injectable } from '@angular/core';
import { delay, iif, interval, map, Observable, of, pipe, Subscriber, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  obs$ : Observable<any> = of([1,2,3])
  obs2$ : Observable<any> = interval(1000).pipe(take(10)).pipe(map((v) => v * 2))

  constructor() { 
  }
}
