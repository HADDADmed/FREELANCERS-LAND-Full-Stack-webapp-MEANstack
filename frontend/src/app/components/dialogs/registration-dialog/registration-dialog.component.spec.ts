import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDialogComponent } from './registration-dialog.component';

describe('RegistrationDialogComponent', () => {
  let component: RegistrationDialogComponent;
  let fixture: ComponentFixture<RegistrationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
