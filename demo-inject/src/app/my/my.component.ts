import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-my',
  standalone: true,
  imports: [],
  templateUrl: './my.component.html',
  styleUrl: './my.component.css',
  providers: [CounterService]
})
export class MyComponent {
  constructor(public counter: CounterService){
    console.log(counter.value)
  }
}
