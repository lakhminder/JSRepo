import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg7BlogPostListComponent } from './eg7-blog-post-list.component';

describe('Eg7BlogPostListComponent', () => {
  let component: Eg7BlogPostListComponent;
  let fixture: ComponentFixture<Eg7BlogPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg7BlogPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg7BlogPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
