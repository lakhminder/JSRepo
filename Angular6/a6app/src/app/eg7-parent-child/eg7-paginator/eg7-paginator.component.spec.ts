import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg7PaginatorComponent } from './eg7-paginator.component';

describe('Eg7PaginatorComponent', () => {
  let component: Eg7PaginatorComponent;
  let fixture: ComponentFixture<Eg7PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg7PaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg7PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
