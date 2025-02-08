import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCarsComponent } from './latest-cars.component';

describe('LatestCarsComponent', () => {
  let component: LatestCarsComponent;
  let fixture: ComponentFixture<LatestCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
