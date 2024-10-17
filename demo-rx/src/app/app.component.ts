import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-rx';
  data = inject(DataService)

constructor(){
  this.data.obs$.subscribe((data) => {console.log('obs$', data)})
  this.data.obs2$.subscribe((data) => {console.log('obs2$', data)})

}

}
