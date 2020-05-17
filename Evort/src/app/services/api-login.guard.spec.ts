import { TestBed } from '@angular/core/testing';

import { ApiLoginGuard } from './api-login.guard';

describe('ApiLoginGuard', () => {
  let guard: ApiLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApiLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
