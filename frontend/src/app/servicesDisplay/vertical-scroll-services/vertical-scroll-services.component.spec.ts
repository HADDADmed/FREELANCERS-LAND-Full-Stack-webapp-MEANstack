import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalScrollServicesComponent } from './vertical-scroll-services.component';

describe('VerticalScrollServicesComponent', () => {
  let component: VerticalScrollServicesComponent;
  let fixture: ComponentFixture<VerticalScrollServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalScrollServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalScrollServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
