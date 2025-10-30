import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTemplate } from './page-template';

describe('PageTemplate', () => {
  let component: PageTemplate;
  let fixture: ComponentFixture<PageTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
