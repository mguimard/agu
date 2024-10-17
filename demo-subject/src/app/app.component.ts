import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from "./display/display.component";
import { UpdaterComponent } from "./updater/updater.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayComponent, UpdaterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-subject';
}
