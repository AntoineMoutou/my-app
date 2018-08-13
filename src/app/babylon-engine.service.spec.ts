import { TestBed, inject } from '@angular/core/testing';

import { BabylonEngineService } from './babylon-engine.service';

describe('BabylonEngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabylonEngineService]
    });
  });

  it('should be created', inject([BabylonEngineService], (service: BabylonEngineService) => {
    expect(service).toBeTruthy();
  }));
});
