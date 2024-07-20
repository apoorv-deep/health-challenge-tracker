import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { WorkoutTrackerComponent } from './workout-tracker.component';
import { By } from '@angular/platform-browser';

describe('WorkoutTrackerComponent', () => {
  let component: WorkoutTrackerComponent;
  let fixture: ComponentFixture<WorkoutTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutTrackerComponent],
      imports: [RouterTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty workout data', () => {
    expect(component.workout).toEqual({
      username: '',
      workoutType: '',
      workoutMinutes: null
    });
  });

  it('should navigate to workout list on form submit', () => {
    spyOn(component['router'], 'navigate');
    
    // Fill in the form
    component.workout = {
      username: 'John Doe',
      workoutType: 'Running',
      workoutMinutes: 30
    };
    
    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    
    expect(component['router'].navigate).toHaveBeenCalledWith(['/workout-list']);
  });

  // Add tests to ensure form validation and other functionalities if needed
});
