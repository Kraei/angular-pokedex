import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../api/global';
import { SearchData, Ability, Stat, Move } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private apiUrl: string = API_URL;
  private _searchHistory: string[] = [];
  public pokemonAbilities: Ability[] = [];
  public pokemonMoves: Move[] = [];
  public pokemonStats: Stat[] = [];

  constructor(private http: HttpClient) {

  }

  get searchHistory() {
    return [...this._searchHistory];
  }

  searchPokemon( search: string ):void {
    this._searchHistory.unshift( search )
    this.http.get<SearchData>(`${this.apiUrl}/${search}`).subscribe(
      res => {
        this.filterData(res)
      }
    )
  }

  //filterData(abilities: Ability[], moves: Move[], stats: Stat[]):void {
  filterData(data: SearchData):void {
    const { abilities, moves, stats } = data
    this.pokemonAbilities = abilities;
    this.pokemonMoves = moves;
    this.pokemonStats = stats;
    console.log(abilities)
    console.log(moves)
    console.log(stats)

  }

}
