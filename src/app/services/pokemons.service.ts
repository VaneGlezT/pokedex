import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private http = inject(HttpClient);
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';

  constructor() { }
  
  getPokemons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPokemonDetail(url: string) {
    return this.http.get<any>(url);
  }

  
}
