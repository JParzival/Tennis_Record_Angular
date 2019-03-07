import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducirTorneoComponent } from './introducir-torneo.component';

describe('IntroducirTorneoComponent', () => {
  let component: IntroducirTorneoComponent;
  let fixture: ComponentFixture<IntroducirTorneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducirTorneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducirTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
