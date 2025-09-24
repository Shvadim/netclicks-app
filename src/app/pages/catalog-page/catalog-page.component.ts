import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css'
})
export class CatalogPageComponent {
  // public films: Film[] = FILMS
  constructor(private _filmService: FilmsService) { }

  /**
   * get films
   */
  public get films(): Film[] {
    return this._filmService.filteredFilms
  }
}
