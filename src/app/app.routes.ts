import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PokedexListComponent } from './pages/pokedex-list/pokedex-list.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'pokedex-list', component: PokedexListComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'login' }
];
