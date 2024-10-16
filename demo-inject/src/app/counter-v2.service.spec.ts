import { TestBed } from '@angular/core/testing';

import { CounterV2Service } from './counter-v2.service';

describe('CounterV2Service', () => {
  let service: CounterV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
