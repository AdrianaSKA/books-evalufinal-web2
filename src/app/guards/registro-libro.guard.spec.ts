import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { registroLibroGuard } from './registro-libro.guard';

describe('registroLibroGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registroLibroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
