import { TestBed } from '@angular/core/testing';

import { AuthusService } from './authus.service';

describe('AuthusService', () => {
  let service: AuthusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
