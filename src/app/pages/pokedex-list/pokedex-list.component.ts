import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { PokemonsService } from '../../services/pokemons.service';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pokedex-list',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatIconModule, FormsModule],
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.scss'
})
export class PokedexListComponent {

  private pokemonService = inject(PokemonsService);
  public pokemons: any[] = [];
  public selectedPokemon: any = null;
  public searchText: string = '';

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (response) => {

        const requests = response.results.map((pokemon: any) =>
          this.pokemonService.getPokemonDetail(pokemon.url)
        );

        forkJoin<any[]>(requests).subscribe({
          next: (details) => {

            this.pokemons = details.map((detail: any) => ({
              name: detail.name,
              image: detail.sprites.other['official-artwork'].front_default,
              types: detail.types.map((t: any) => t.type.name),
              cry: detail.cries?.latest
            }));
            if (this.pokemons.length) {
              this.selectPokemon(this.pokemons[0]);
            }
          },
          error: (err) => {
            console.error('Error loading details', err);
          }
        });
      }
    });

  }

  getTypeColor(type: string): string {
    const colors: any = {
      fire: '#f08030',
      water: '#6890f0',
      grass: '#78c850',
      electric: '#f8d030',
      poison: '#a040a0',
      rock: '#b8a038',
      ground: '#e0c068',
      psychic: '#f85888',
      ice: '#98d8d8',
      dragon: '#7038f8',
      normal: '#a8a878',
      flying: '#a890f0',
      bug: '#a8b820',
      fighting: '#c03028',
      ghost: '#705898',
      dark: '#705848',
      steel: '#b8b8d0',
      fairy: '#ee99ac'
    };

    return colors[type] || '#999';
  }

  selectPokemon(pokemon: any) {
    this.selectedPokemon = pokemon;
  }

  playCry(url: string): void {
    const audio = new Audio(url);
    audio.play();
  }

  get filteredPokemons() {
    return this.pokemons
      .filter(p =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
  }

}
