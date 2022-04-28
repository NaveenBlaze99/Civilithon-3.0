import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneminrjComponent } from './oneminrj.component';

describe('OneminrjComponent', () => {
  let component: OneminrjComponent;
  let fixture: ComponentFixture<OneminrjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneminrjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneminrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
