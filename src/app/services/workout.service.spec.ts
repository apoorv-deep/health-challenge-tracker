import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';

describe('WorkoutService', () => {
  let service: WorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutService);
  });

  it('should add a workout', () => {
    const workout = {
      username: 'Test User',
      workoutType: 'Running',
      workoutMinutes: 30
    };

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.callFake(() => '[]'); // Return an empty list initially
    spyOn(localStorage, 'setItem').and.callThrough();

    service.addWorkout(workout);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'workouts',
      JSON.stringify([workout])
    );
  });
});
