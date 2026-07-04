import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex-list',
  standalone: true,
  imports: [],
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.scss'
})
export class PokedexListComponent {

  ngOnDestroy(): void {
    localStorage.setItem('logged', 'false');
  }
}
