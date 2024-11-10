import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinUpdateComponent } from './bin-update.component';

describe('BinUpdateComponent', () => {
  let component: BinUpdateComponent;
  let fixture: ComponentFixture<BinUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
