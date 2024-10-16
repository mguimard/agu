import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompteurComponent } from "./compteur/compteur.component";
import { VoitureComponent } from "./voiture/voiture.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompteurComponent, VoitureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-component';

  nbVoitures = 0;
  debutCourse = false;

  constructor(){
    setTimeout(() => this.debutCourse = true, 2000)
  }
}
