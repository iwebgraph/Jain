import { TestBed } from '@angular/core/testing';

import { ConnectingService } from './connecting.service';

describe('ConnectingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectingService = TestBed.get(ConnectingService);
    expect(service).toBeTruthy();
  });
});
