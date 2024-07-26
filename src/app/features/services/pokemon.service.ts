import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../api/global';
import { SearchData } from '../interfaces/service.interface'

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  public pokemonData: SearchData[] = [];
  private apiUrl: string = API_URL;
  private _searchHistory: string[] = [];

  constructor(private http: HttpClient) {

  }

  get searchHistory() {
    return [...this._searchHistory];
  }

  searchPokemon( search: string ):void {
    this._searchHistory.unshift( search )
    this.http.get<SearchData>(`${this.apiUrl}/${search}`).subscribe(
      res => {
        this._filterData();
        console.log(res)
      }
    )
  }

  _filterData(){
    return
  }


}
