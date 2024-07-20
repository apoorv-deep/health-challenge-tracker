import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correct this to styleUrls
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentYear: number = new Date().getFullYear(); // Initialize here

  ngOnInit() {
  }

  constructor(private router: Router) { }
  
  navigateToWorkoutTracker() {
    this.router.navigate(['/workout-tracker']);
  }
  navigateToWorkoutProgress() {
    this.router.navigate(['/workout-progress']);
  }

  navigateToWorkoutList() {
    this.router.navigate(['/workout-list']);
  }
}
