import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesForm } from './properties-form';

describe('PropertiesForm', () => {
  let component: PropertiesForm;
  let fixture: ComponentFixture<PropertiesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
