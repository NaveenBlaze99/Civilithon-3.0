import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExquizComponent } from './exquiz.component';

describe('ExquizComponent', () => {
  let component: ExquizComponent;
  let fixture: ComponentFixture<ExquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
