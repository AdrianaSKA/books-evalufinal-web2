import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../service/autenticacion.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(
    public authServicio: AutenticacionService,
    private router: Router,
  ) {}

  logout(): void {
    this.authServicio.logout();
    this.router.navigateByUrl('/');
  }

}

