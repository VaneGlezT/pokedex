import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  ngOnInit(): void {
    AOS.init();
  }
}
