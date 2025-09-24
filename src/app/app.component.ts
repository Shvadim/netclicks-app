import { Component } from '@angular/core';
import { Film } from "./models/film.model";
import { FILMS } from './constants/films.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // public title: string = 'какойто тайтл'
  // private _title: string = 'приват тайтл'
  // public get getTitle(): string {
  //   return this._title
  // }

  public films: Film[] = FILMS
}
