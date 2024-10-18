import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Result } from '../../model/result';
import { FavoriteService } from '../../services/favorite.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  favoriteService = inject(FavoriteService)
  favorites$ : Observable<Result[]> = this.favoriteService.favorites$.asObservable();
}
