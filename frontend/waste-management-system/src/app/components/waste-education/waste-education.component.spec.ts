import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteEducationComponent } from './waste-education.component';

describe('WasteEducationComponent', () => {
  let component: WasteEducationComponent;
  let fixture: ComponentFixture<WasteEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
