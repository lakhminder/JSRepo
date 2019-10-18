import { TestBed, inject } from '@angular/core/testing';

import { Eg4LoggerService } from './eg4-logger.service';

describe('Eg4LoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Eg4LoggerService]
    });
  });

  it('should be created', inject([Eg4LoggerService], (service: Eg4LoggerService) => {
    expect(service).toBeTruthy();
  }));
});
