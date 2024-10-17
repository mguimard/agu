import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  data$ = inject(DataService).tuyau$.asObservable()

}
