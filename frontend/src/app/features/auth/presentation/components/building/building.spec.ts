import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Building } from './building';

describe('Building', () => {
  let component: Building;
  let fixture: ComponentFixture<Building>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Building]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Building);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
