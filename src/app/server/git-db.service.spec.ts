import { TestBed } from '@angular/core/testing';

import { GitDbService } from './git-db.service';

describe('GitDbService', () => {
  let service: GitDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
