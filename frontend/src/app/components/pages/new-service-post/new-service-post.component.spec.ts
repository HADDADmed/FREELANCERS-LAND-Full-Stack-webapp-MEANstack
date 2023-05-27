import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServicePostComponent } from './new-service-post.component';

describe('NewServicePostComponent', () => {
  let component: NewServicePostComponent;
  let fixture: ComponentFixture<NewServicePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewServicePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewServicePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
