import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawnWordComponent } from './drawn-word.component';

describe('DrawnWordComponent', () => {
  let component: DrawnWordComponent;
  let fixture: ComponentFixture<DrawnWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawnWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawnWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
