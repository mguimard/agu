import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from "./my/my.component";
import { CounterService } from './counter.service';
import { CounterV2Service } from './counter-v2.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: CounterService, useClass: CounterV2Service} ]
})
export class AppComponent {
  title = 'demo-inject';

  constructor(
    public counter: CounterService,
    /*public other: OtherService,
    private http: HttpClient*/
  ){}



} 
