import { TestBed, inject } from '@angular/core/testing';

import { TestpresseroService } from './testpressero.service';

describe('TestpresseroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestpresseroService]
    });
  });

  it('should be created', inject([TestpresseroService], (service: TestpresseroService) => {
    expect(service).toBeTruthy();
  }));
});
