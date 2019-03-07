import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducirPartidoComponent } from './introducir-partido.component';

describe('IntroducirPartidoComponent', () => {
  let component: IntroducirPartidoComponent;
  let fixture: ComponentFixture<IntroducirPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroducirPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducirPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
