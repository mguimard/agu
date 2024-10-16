import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermiqueComponent } from './thermique.component';

describe('ThermiqueComponent', () => {
  let component: ThermiqueComponent;
  let fixture: ComponentFixture<ThermiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThermiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
