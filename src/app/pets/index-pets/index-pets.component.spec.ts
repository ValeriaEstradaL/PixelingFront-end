import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPetsComponent } from './index-pets.component';

describe('IndexPetsComponent', () => {
  let component: IndexPetsComponent;
  let fixture: ComponentFixture<IndexPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
