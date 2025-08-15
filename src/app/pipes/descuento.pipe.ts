import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento',
  standalone: true
})
export class DescuentoPipe implements PipeTransform {
  transform(precio: number): number {
    let porcentaje = 0;

    if (precio < 20) {
      porcentaje = 5;
    } else if (precio <= 50) {
      porcentaje = 10;
    } else {
      porcentaje = 15;
    }

    const precioConDescuento = precio - (precio * porcentaje / 100);
    return precioConDescuento;
  }

}
