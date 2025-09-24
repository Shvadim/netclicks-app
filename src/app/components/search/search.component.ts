import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchString: string = ''
  constructor(private _filmService: FilmsService) { }

  public updateValue(event: Event) {
    const targetElement = event.target as HTMLInputElement
    this.searchString = targetElement.value
  }
  /**
    * updateSearch   
 */
  public updateSearch(event: Event) {
    this._filmService.searchString = this.searchString
    console.log(this.searchString);

  }
}
