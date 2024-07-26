import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input()
  public title: string = '';

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private pokemonService: PokemonService) {

  }

  searchPokemon() {
    const newSearch = this.tagInput.nativeElement.value;
    console.log({newSearch})
    this.pokemonService.searchPokemon(newSearch);
    this.tagInput.nativeElement.value = '';
  }
}
