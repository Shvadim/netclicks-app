import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/films.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-film-page',
  standalone: false,
  templateUrl: './film-page.component.html',
  styleUrl: './film-page.component.css'
})
export class FilmPageComponent implements OnInit {
  public films: Film[] = []
  public film!: Film

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmService: FilmsService
  ) { }
  ngOnInit(): void {
    this.films = this._filmService.getFullFilms
    const id = this._route.snapshot.paramMap.get('id')
    this._initFilm(Number(id))
  }

  private _initFilm(id: number) {
    const findFilm = this.films.find(item => item.id === id);
    if (findFilm) {
      this.film = findFilm
    }
    else {
      this._router.navigate(['/'])
    }
  }
}
