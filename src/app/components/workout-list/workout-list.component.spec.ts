import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutListComponent } from './workout-list.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkoutListComponent],
      imports: [FormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.users).toBeTruthy();
    expect(component.paginatedUsers).toEqual([]);
    expect(component.currentPage).toBe(1);
    expect(component.itemsPerPage).toBe(5);
    expect(component.itemsPerPageOptions).toEqual([5, 10, 15]);
  });

  it('should filter users based on search term', () => {
    component.searchTerm = 'John Doe';
    component.applyFilters();
    fixture.detectChanges();

    expect(component.paginatedUsers.length).toBeGreaterThan(0);
    expect(component.paginatedUsers[0].name).toBe('John Doe');
  });

  it('should paginate users correctly', () => {
    component.currentPage = 2;
    component.paginateUsers();
    fixture.detectChanges();

    // Ensure that the pagination logic is working correctly
    expect(component.paginatedUsers.length).toBeLessThanOrEqual(component.itemsPerPage);
  });

  // Add more tests to ensure filtering, pagination, and edge cases
});
