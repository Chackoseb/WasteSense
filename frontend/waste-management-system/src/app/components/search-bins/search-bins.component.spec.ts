import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBinsComponent } from './search-bins.component';

describe('SearchBinsComponent', () => {
  let component: SearchBinsComponent;
  let fixture: ComponentFixture<SearchBinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
