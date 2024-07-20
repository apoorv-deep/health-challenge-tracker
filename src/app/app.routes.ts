import { Routes } from '@angular/router';
import { WorkoutTrackerComponent } from './components/workout-tracker/workout-tracker.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutProgressChart} from './components/workout-progress-chart/workout-progress-chart.component'; // Import the chart component

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'workout-tracker',
    pathMatch: 'full'
  },
  {
    path: 'workout-tracker',
    component: WorkoutTrackerComponent
  },
  {
    path: 'workout-list',
    component: WorkoutListComponent
  },
  { path: 'workout-progress', 
    component: WorkoutProgressChart
  },
];