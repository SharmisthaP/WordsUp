import { TestBed } from '@angular/core/testing';

import { WordInfoService } from './word-info.service';

describe('WordInfoService', () => {
  let service: WordInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
