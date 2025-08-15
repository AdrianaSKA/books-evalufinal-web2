import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { loginMatchGuard } from './guards/login-match.guard';
import { autenticaGuard } from './guards/autentica.guard';
import { loginActivoGuard } from './guards/login-activo.guard';
import { RegistroLibrosComponent } from './components/registro-libros/registro-libros.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LoginComponent } from './components/login/login.component';
import { registroLibroGuard } from './guards/registro-libro.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Inicio' },
    { path: 'libros', component: LibrosComponent, title: 'Libros', canActivate: [autenticaGuard], canMatch: [loginActivoGuard] },
    { path: 'libros/nuevo', component: RegistroLibrosComponent, title: 'Nuevo Libro', canActivate: [autenticaGuard], canMatch: [loginActivoGuard], canDeactivate: [registroLibroGuard] },
    { path: 'login', component: LoginComponent, canMatch: [loginMatchGuard] },
    { path: 'registro', component: RegistroComponent, canDeactivate: [registroUsuarioGuard], canMatch: [loginMatchGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
