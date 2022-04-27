import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutterupComponent } from './shutterup.component';

describe('ShutterupComponent', () => {
  let component: ShutterupComponent;
  let fixture: ComponentFixture<ShutterupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShutterupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShutterupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
