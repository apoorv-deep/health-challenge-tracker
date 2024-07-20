import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BarChartModule, ColorHelper } from '@swimlane/ngx-charts';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-workout-progress-chart',
  templateUrl: './workout-progress-chart.component.html',
  styleUrls: ['./workout-progress-chart.component.css'],
  standalone: true,
  imports: [CommonModule, BarChartModule, RouterModule],
})
export class WorkoutProgressChart implements OnInit {
  users: User[] = [];
  selectedUser: string | null = null;
  chartData: any[] = [];
  colorScheme: any;

  constructor(private route: ActivatedRoute) {
    this.colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };
  }

  ngOnInit(): void {
    this.loadInitialUsers(); // Load default users
    this.route.queryParams.subscribe(params => {
      this.selectedUser = params['user'];
      this.loadUsersFromLocalStorage();
      this.updateChartData();
    });
  }

  loadInitialUsers() {
    this.users = [
      {
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      },
      {
        name: 'Jane Smith',
        workouts: [
          { type: 'Swimming', minutes: 60 },
          { type: 'Running', minutes: 20 }
        ]
      },
      {
        name: 'Mike Johnson',
        workouts: [
          { type: 'Yoga', minutes: 50 },
          { type: 'Cycling', minutes: 40 }
        ]
      }
    ];
  }

  loadUsersFromLocalStorage() {
    const localStorageUsers = JSON.parse(localStorage.getItem('workouts') || '[]');
    localStorageUsers.forEach((localStorageUser: any) => {
      const userIndex = this.users.findIndex(user => user.name === localStorageUser.username);
      if (userIndex !== -1) {
        this.users[userIndex].workouts.push({
          type: localStorageUser.workoutType,
          minutes: localStorageUser.workoutMinutes
        });
      } else {
        this.users.push({
          name: localStorageUser.username,
          workouts: [
            {
              type: localStorageUser.workoutType,
              minutes: localStorageUser.workoutMinutes
            }
          ]
        });
      }
    });
  }

  selectUser(userName: string) {
    this.selectedUser = userName;
    const user = this.users.find(user => user.name === userName);
    if (user) {
      this.chartData = user.workouts.map(workout => ({
        name: workout.type,
        value: workout.minutes
      }));
    }
  }

  updateChartData() {
    if (this.selectedUser) {
      const user = this.users.find(u => u.name === this.selectedUser);
      if (user) {
        this.chartData = user.workouts.map(workout => ({
          name: workout.type,
          value: workout.minutes
        }));
      } else {
        this.chartData = [];
      }
    }
  }
}


