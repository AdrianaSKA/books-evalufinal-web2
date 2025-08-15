import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibrosService } from '../../service/libros.service';
import { DescuentoPipe } from '../../pipes/descuento.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [RouterLink, DescuentoPipe, CommonModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {

    libros: any[] = [];

  constructor(
    private libroService: LibrosService, 
  ) { }

  ngOnInit(): void {
    this.libroService.getLibros().subscribe(data => {
      this.libros = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
    });
  }

  eliminarLibro(id: string): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.libroService.eliminarLibro(id).subscribe(() => {
        this.libros = this.libros.filter(p => p.id !== id);
      });
    }
  }


}
