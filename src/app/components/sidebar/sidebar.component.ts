import { Component } from '@angular/core';
import { Selection } from "../../models/selection.model";
import { SELECTIONS } from '../../constants/selections.constants';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public selections: Selection[] = SELECTIONS
}
