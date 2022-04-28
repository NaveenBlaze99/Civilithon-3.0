import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchpartyComponent } from './watchparty.component';

describe('WatchpartyComponent', () => {
  let component: WatchpartyComponent;
  let fixture: ComponentFixture<WatchpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchpartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
