import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg9ShellPatternComponent } from './eg9-shell-pattern.component';

describe('Eg9ShellPatternComponent', () => {
  let component: Eg9ShellPatternComponent;
  let fixture: ComponentFixture<Eg9ShellPatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg9ShellPatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg9ShellPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
