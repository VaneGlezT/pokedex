import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
    AOS.init({
      once: false
    });

    setTimeout(() => {
      AOS.refresh();
    });
  }

  logout() {
    localStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }

}
