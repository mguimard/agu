import { TestBed } from '@angular/core/testing';

import { MeteoService } from './meteo.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('MeteoService', () => {
  let service: MeteoService;
  let http: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[provideHttpClient()]
    });
    service = TestBed.inject(MeteoService);

    http = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should launch an HTTP request', async () => {

    let obj = {results : []}

    spyOn(http, 'get').and.returnValue(
     of(obj)
    )

    let res = await service.searchByCity('Brest')

    expect(res).toBe(obj);
  });

});
