import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { PokemonService } from '../services/pokemon.service'
import { Ability } from '../interfaces/service.interface';

@Component({
  selector: 'main-feature-page',
  templateUrl: './main-feature.component.html'
})

export class MainFeatureComponent {

  constructor(private pokemonService: PokemonService) {
  }

  public abilities: Ability[] = [];
  public characters: Character[] = [{
    name: 'Pikachu',
    type: 'Electric',
  }, {
    name: 'Evee',
    type: 'Normal'
  }];

  get getAbilities() {
    return this.pokemonService.pokemonAbilities;
  }


}
