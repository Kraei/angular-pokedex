import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.css',
})
export class ListContainerComponent {

  @Input()
  public characterList: Character[] = [];
}
