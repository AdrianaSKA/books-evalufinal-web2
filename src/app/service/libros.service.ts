import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

    private API_LIBROS = 'https://app-crud-6ca95-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  getLibros(): Observable<any> {
    return this.http.get(`${this.API_LIBROS}/libros.json`);
  }

  getLibroById(id: string): Observable<any> {
    return this.http.get(`${this.API_LIBROS}/libros/${id}.json`);
  }

  crearLibro(libro: any): Observable<any> {
    return this.http.post(`${this.API_LIBROS}/libros.json`, libro);
  }

  actualizarLibro(id: string, libro: any): Observable<any> {
    return this.http.put(`${this.API_LIBROS}/libros/${id}.json`, libro);
  }

  eliminarLibro(id: string): Observable<any> {
    return this.http.delete(`${this.API_LIBROS}/libros/${id}.json`);
  }
}
