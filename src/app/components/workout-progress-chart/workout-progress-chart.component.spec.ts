import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutProgressChart } from './workout-progress-chart.component';
import { CommonModule } from '@angular/common';
import { BarChartModule } from '@swimlane/ngx-charts';

describe('WorkoutProgressChart', () => {
  let component: WorkoutProgressChart;
  let fixture: ComponentFixture<WorkoutProgressChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutProgressChart],
      imports: [CommonModule, BarChartModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutProgressChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty chart data', () => {
    expect(component.chartData).toEqual([]);
  });

  it('should select a user and update chart data', () => {
    component.selectUser('John Doe');
    fixture.detectChanges();
    
    expect(component.chartData.length).toBeGreaterThan(0);
    expect(component.chartData[0].name).toBe('Running'); // Adjust based on initial user data
  });

  // Add more tests to ensure user selection and chart rendering
});
