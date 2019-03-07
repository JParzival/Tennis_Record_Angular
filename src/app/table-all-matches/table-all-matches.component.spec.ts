import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAllMatchesComponent } from './table-all-matches.component';

describe('TableAllMatchesComponent', () => {
  let component: TableAllMatchesComponent;
  let fixture: ComponentFixture<TableAllMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAllMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAllMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
