import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    AOS.init();
  }
  login() {
    const user = this.loginForm.get('user')?.value;
    const password = this.loginForm.get('password')?.value;
    if (!user || !password) {
      this.snackBar.open('Completa los campos', 'Cerrar', { duration: 3000 });
      return;
    }

    if (user === 'admin' && password === 'admin') {
      this.snackBar.open('Sesión iniciada', 'Cerrar', { duration: 5000 });

      localStorage.setItem('logged', 'true');
      this.router.navigate(['/pokedex-list']);
    } else {
      this.snackBar.open('Credenciales inválidas', 'Cerrar', { duration: 5000 });
    }
  }

}
