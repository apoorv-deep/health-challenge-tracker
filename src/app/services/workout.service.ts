import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private storageKey = 'workouts';

  constructor() { }

  addWorkout(workout: any): void {
    let workouts = this.getWorkouts();
    workouts.push(workout);
    localStorage.setItem(this.storageKey, JSON.stringify(workouts));
  }

  getWorkouts(): any[] {
    const workouts = localStorage.getItem(this.storageKey);
    return workouts ? JSON.parse(workouts) : [];
  }
}
