import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizentalScrollServicesComponent } from './horizental-scroll-services.component';

describe('HorizentalScrollServicesComponent', () => {
  let component: HorizentalScrollServicesComponent;
  let fixture: ComponentFixture<HorizentalScrollServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizentalScrollServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizentalScrollServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
