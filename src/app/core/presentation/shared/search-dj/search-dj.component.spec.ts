import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDjComponent } from './search-dj.component';

describe('SearchDjComponent', () => {
  let component: SearchDjComponent;
  let fixture: ComponentFixture<SearchDjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
