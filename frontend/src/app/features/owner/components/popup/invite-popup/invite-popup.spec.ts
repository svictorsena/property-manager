import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePopup } from './invite-popup';

describe('InvitePopup', () => {
  let component: InvitePopup;
  let fixture: ComponentFixture<InvitePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitePopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitePopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
