import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg1DateComponent } from './eg1-date.component';

describe('Eg1DateComponent', () => {
  let component: Eg1DateComponent;
  let fixture: ComponentFixture<Eg1DateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg1DateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg1DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
