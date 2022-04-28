import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidtimeComponent } from './bidtime.component';

describe('BidtimeComponent', () => {
  let component: BidtimeComponent;
  let fixture: ComponentFixture<BidtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
