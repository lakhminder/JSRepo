import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg2UserAddressComponent } from './eg2-user-address.component';

describe('Eg2UserAddressComponent', () => {
  let component: Eg2UserAddressComponent;
  let fixture: ComponentFixture<Eg2UserAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg2UserAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg2UserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
