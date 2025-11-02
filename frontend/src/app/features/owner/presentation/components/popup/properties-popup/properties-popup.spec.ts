import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPopup } from './properties-popup';

describe('PropertiesPopup', () => {
  let component: PropertiesPopup;
  let fixture: ComponentFixture<PropertiesPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
