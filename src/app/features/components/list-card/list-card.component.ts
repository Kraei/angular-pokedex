import { Component, Input } from '@angular/core';
import { Ability } from '../../interfaces/service.interface';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {
  @Input()
  public abilitiesList;
}
