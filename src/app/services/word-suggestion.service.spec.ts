import { TestBed } from '@angular/core/testing';

import { WordSuggestionService } from './word-suggestion.service';

describe('WordSuggestionService', () => {
  let service: WordSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
