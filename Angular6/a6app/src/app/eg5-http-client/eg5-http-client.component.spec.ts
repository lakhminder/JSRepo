import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg5HttpClientComponent } from './eg5-http-client.component';

describe('Eg5HttpClientComponent', () => {
  let component: Eg5HttpClientComponent;
  let fixture: ComponentFixture<Eg5HttpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg5HttpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg5HttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
