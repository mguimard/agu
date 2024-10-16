import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrackDirective } from './track.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrackDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-directive';
}
