import { TestBed, inject } from '@angular/core/testing';

import { BabylonConfService } from './babylon-conf.service';

describe('BabylonConfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BabylonConfService]
    });
  });

  it('should be created', inject([BabylonConfService], (service: BabylonConfService) => {
    expect(service).toBeTruthy();
  }));
});
