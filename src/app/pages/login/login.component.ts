import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  login() {
    localStorage.setItem('logged', 'true');
    this.router.navigate(['/pokedex-list']);
  }

}
