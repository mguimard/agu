import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-updater',
  standalone: true,
  imports: [],
  templateUrl: './updater.component.html',
  styleUrl: './updater.component.css'
})
export class UpdaterComponent {
  data = inject(DataService)
  
}
