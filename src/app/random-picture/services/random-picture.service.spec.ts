import { TestBed } from '@angular/core/testing';

import { RandomPictureService } from './random-picture.service';

describe('RandomPictureService', () => {
  let service: RandomPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
