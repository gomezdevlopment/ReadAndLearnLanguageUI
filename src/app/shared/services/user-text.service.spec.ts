import { TestBed } from '@angular/core/testing';

import { UserTextService } from '../services/user-text.service';

describe('UserTextService', () => {
  let service: UserTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
