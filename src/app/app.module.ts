import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkoutTrackerComponent } from './components/workout-tracker/workout-tracker.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  { path: '', component: WorkoutTrackerComponent },
  { path: 'workout-list', component: WorkoutListComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    WorkoutTrackerComponent,
    NgxPaginationModule
  ],
  bootstrap: []
})
export class AppModule { }