import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg6PipesComponent } from './eg6-pipes.component';

describe('Eg6PipesComponent', () => {
  let component: Eg6PipesComponent;
  let fixture: ComponentFixture<Eg6PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg6PipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg6PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
