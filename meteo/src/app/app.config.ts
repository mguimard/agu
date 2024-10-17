import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { NgxIndexedDBService, CONFIG_TOKEN , DBConfig} from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'favorites',
    storeConfig: { keyPath: 'id', autoIncrement: false },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'latitude', keypath: 'latitude', options: { unique: false } },
      { name: 'longitude', keypath: 'longitude', options: { unique: false } }
    ]
  }]
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    NgxIndexedDBService,
    { provide: CONFIG_TOKEN, useValue: { [dbConfig.name]: dbConfig } }, 
  ]
};
