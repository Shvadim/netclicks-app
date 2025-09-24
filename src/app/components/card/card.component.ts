import { Component, Input, OnInit } from '@angular/core';
import { Film } from "../../models/film.model";

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  // ! - означает что мы точно передадим значение. и ts не ругается
  @Input() film!: Film;
  public filmCategory: string[] = []
  //

  ngOnInit(): void {
    this.filmCategory = this.film.category
  }

}
