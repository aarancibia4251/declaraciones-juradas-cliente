import { TestBed } from '@angular/core/testing';

import { ExampleDataRepositoryService } from './example-data-repository.service';

describe('ExampleDataRepositoryService', () => {
  let service: ExampleDataRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleDataRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
