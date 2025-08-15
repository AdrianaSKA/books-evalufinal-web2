import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticacionService } from '../../service/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private authServicio: AutenticacionService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { correo, password } = this.loginForm.value;

      this.authServicio.login(correo, password).subscribe(sesionExitosa => {
        if (sesionExitosa) {
          const redireccion = localStorage.getItem('redirectUrl') || '/libros';
          localStorage.removeItem('redirectUrl');
          this.router.navigateByUrl(redireccion);
        } else {
          this.error = 'Correo o contraseña incorrectos';
        }
      }, error => {
        console.error('Error al iniciar sesión:', error);
        this.error = 'Ocurrió un error en el servidor';
      });

    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
