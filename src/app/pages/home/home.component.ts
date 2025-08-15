import { Component } from '@angular/core';
import { HeroComponent } from "../../components/home/hero/hero.component";
import { DestacadosComponent } from "../../components/home/destacados/destacados.component";
import { TestimoniosComponent } from "../../components/home/testimonios/testimonios.component";
import { InformacionComponent } from "../../components/home/informacion/informacion.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, DestacadosComponent, TestimoniosComponent, InformacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
