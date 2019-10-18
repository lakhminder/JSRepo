import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eg7BlogPostTileComponent } from './eg7-blog-post-tile.component';

describe('Eg7BlogPostTileComponent', () => {
  let component: Eg7BlogPostTileComponent;
  let fixture: ComponentFixture<Eg7BlogPostTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eg7BlogPostTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eg7BlogPostTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
