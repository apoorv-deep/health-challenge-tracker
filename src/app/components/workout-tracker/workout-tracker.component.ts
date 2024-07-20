import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-workout-tracker',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './workout-tracker.component.html',
  styleUrls: ['./workout-tracker.component.css']
})export class WorkoutTrackerComponent {
  workout = {
    username: '',
    workoutType: '',
    workoutMinutes: null as number | null
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      workouts.push(this.workout);
      localStorage.setItem('workouts', JSON.stringify(workouts));
      this.router.navigate(['/workout-list']);
    }
  }

  navigateToWorkoutProgress() {
    this.router.navigate(['/workout-progress']); 
  }

  navigateToWorkoutList() {
    this.router.navigate(['/workout-list']); 
  }
}