import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteCategorizerComponent } from './waste-categorizer.component';

describe('WasteCategorizerComponent', () => {
  let component: WasteCategorizerComponent;
  let fixture: ComponentFixture<WasteCategorizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteCategorizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteCategorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
