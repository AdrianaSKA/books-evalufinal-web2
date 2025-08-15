import { CanDeactivateFn } from '@angular/router';
import { RegistroLibrosComponent } from '../components/registro-libros/registro-libros.component';

export const registroLibroGuard: CanDeactivateFn<RegistroLibrosComponent> 
  = (component, currentRoute, currentState, nextState) => {

  if(component.campoVacios()){
    return confirm('Tienes datos sin registrar. Seguro quieres abandonar el formulario?')
  }
  return true;
};
