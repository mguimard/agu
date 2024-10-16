import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  value: number = 0;

  constructor() { 
    console.log('New Service')
   // setInterval(() => this.value++, 1000)
  }
}
