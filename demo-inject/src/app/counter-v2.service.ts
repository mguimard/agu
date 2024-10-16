import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class CounterV2Service extends CounterService {
 // override value : number = 10;
 constructor(){
  super()
  this.value = 12
 }
}
