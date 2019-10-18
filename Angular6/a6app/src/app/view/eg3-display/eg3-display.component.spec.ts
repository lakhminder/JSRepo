import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg3DisplayComponent } from './eg3-display.component';

describe('Eg3DisplayComponent', () => {
  let component: Eg3DisplayComponent;
  let fixture: ComponentFixture<Eg3DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg3DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg3DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
