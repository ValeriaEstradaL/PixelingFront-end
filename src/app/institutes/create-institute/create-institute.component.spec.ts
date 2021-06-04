import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstituteComponent } from './create-institute.component';

describe('CreateInstituteComponent', () => {
  let component: CreateInstituteComponent;
  let fixture: ComponentFixture<CreateInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
