import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTitle } from './main-title';

describe('MainTitle', () => {
  let component: MainTitle;
  let fixture: ComponentFixture<MainTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
