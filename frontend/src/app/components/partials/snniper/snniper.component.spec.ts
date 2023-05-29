import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnniperComponent } from './snniper.component';

describe('SnniperComponent', () => {
  let component: SnniperComponent;
  let fixture: ComponentFixture<SnniperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnniperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnniperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
