import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'main-feature-page',
  templateUrl: './main-feature.component.html'
})

export class MainFeatureComponent {


  public characters: Character[] = [{
    name: 'Pikachu',
    type: 'Electric',
  }, {
    name: 'Eve',
    type: 'Normal'
  }];

}
