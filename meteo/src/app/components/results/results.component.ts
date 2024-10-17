import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { Result } from '../../model/result';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, RouterLink],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() results!:Result[];
  displayedColumns: string[] = ['name', 'country_code'];
}
