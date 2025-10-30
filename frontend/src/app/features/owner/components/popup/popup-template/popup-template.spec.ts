import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTemplate } from './popup-template';

describe('PopupTemplate', () => {
  let component: PopupTemplate;
  let fixture: ComponentFixture<PopupTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
