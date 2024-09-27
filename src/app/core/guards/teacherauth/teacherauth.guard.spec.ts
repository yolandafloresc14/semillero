import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { teacherauthGuard } from './teacherauth.guard';

describe('teacherauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => teacherauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
