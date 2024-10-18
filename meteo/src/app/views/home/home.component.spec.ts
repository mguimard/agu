import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ActivatedRoute, Params, provideRouter, Router, RouterModule } from '@angular/router';
import { MeteoService } from '../../services/meteo.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Component, inject, Input } from '@angular/core';
import { routes } from '../../app.routes';
import { of, Subject } from 'rxjs';
import { SearchComponent } from '../../components/search/search.component';
//import { MyLibService } from 'my-lib/src/lib/my-lib.service';
//import '@angular/compiler'

class FakeMeteoService {}

@Component({
  selector: 'app-search',
  template: 'Hello app search',
  providers: [{provide: SearchComponent, useClass: FakeSearchComponent}]
})
class FakeSearchComponent {
  @Input() value : string = 'hello'
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router

  let routeSubject$ = new Subject<Params>()
  let obs = routeSubject$.asObservable()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent, 
        NoopAnimationsModule,
        RouterModule.forRoot(routes),
      //  MyLibService
      ],
      providers:[
        [
          {provide: MeteoService, useValue: FakeMeteoService}
        ]
      ],declarations:[ 
        FakeSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.route.params = obs
    fixture.detectChanges();
    
    router = TestBed.inject(Router)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should short app-search', () => {
    let el = fixture.debugElement.query(By.css('app-search')).nativeElement
    expect(el.innerText).toBe('Hello app search')
  });

  it('should display currentSearch', () => {
    component.currentSearch = 'Hello world'
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('h1')).nativeElement
    expect(el.innerText).toBe('Hello world')
  });

  it('should correclty show data on new route' , fakeAsync( async() => {
    routeSubject$.next({city: 'brest'})
    fixture.detectChanges();
    let el = fixture.debugElement.query(By.css('h1')).nativeElement
    expect(el.innerText).toBe('brest')
  }))
});
