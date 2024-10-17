import { TestBed } from '@angular/core/testing';

import { MeteoService } from './meteo.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';

describe('MeteoService', () => {
  let service: MeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideHttpClient()]
    });
    service = TestBed.inject(MeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
