import { Component, Input } from '@angular/core';
import { Selection } from "../../models/selection.model";

@Component({
  selector: 'app-selection',
  standalone: false,
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {
  @Input() select!: Selection
}
