import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AnalyticsCardsComponent } from './analytics-cards/analytics-cards.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  class MockAnalyticsCardsComponent {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent , AnalyticsCardsComponent , MockAnalyticsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
