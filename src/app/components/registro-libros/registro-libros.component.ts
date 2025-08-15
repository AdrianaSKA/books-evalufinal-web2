import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LibrosService } from '../../service/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-libros',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-libros.component.html',
  styleUrl: './registro-libros.component.css'
})
export class RegistroLibrosComponent {

  libroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private librosService: LibrosService,
    private router: Router
  ) {
    this.libroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      autor: ['', Validators.required],
      anio: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/), 
          Validators.min(1901)
        ]
      ],
      precio: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  registrar() {
    if (this.libroForm.valid) {
      const nuevoLibro = this.libroForm.value;

      this.librosService.crearLibro(nuevoLibro).subscribe({
        next: () => {
          alert('Libro registrado correctamente');
          this.router.navigateByUrl('/libros');
        },
        error: (error: any) => {
          console.error('Error al registrar libro:', error);
          alert('Error al registrar libro');
        }
      });

    } else {
      this.libroForm.markAllAsTouched();
    }
  }
}
