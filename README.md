# Health Challenge Tracker

A single-page Angular (v14+) application for tracking and visualizing your fitness challenges.

## Table of Contents

- [Solution Overview](#solution-overview)
- [Functionality & Details](#functionality--details)
- [Running the Application Locally](#running-the-application-locally)
- [Code Coverage Report](#code-coverage-report)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Solution Overview

This application addresses the challenge of tracking personal fitness goals and progress. It provides an intuitive interface for logging workouts, searching/filtering the data, and visualizing the accumulated workout data in the form of charts. The user's data is persistently stored in the browser's local storage.

## Functionality & Details

- **Workout Tracker:**
    - Users can input their name, select a workout type, and enter the duration (in minutes).
    - Form validation ensures data integrity (e.g., required fields, positive minutes).
    - Added workouts are stored in local storage.
    - An event is emitted to notify other components of the new workout data.

- **Workout List:**
    - Displays all logged workouts in a table format (using Angular Material).
    - Columns: User Name, Workout Type, Minutes, Total Minutes (calculated).
    - Search bar to filter workouts by user name.
    - Dropdown menu to filter workouts by type.
    - Pagination for easier navigation of larger datasets.

- **Workout Chart:**
    - Visualizes the accumulated workout data.
    - Utilizes `ngx-charts` (or a similar library) to create bar charts.
    - Displays total minutes per workout type.

## Running the Application Locally

1.  **Prerequisites:**
    - Node.js and npm (or Yarn) installed.
    - Angular CLI installed globally: `npm install -g @angular/cli`

2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/apoorv-deep/health-challenge-tracker.git
    ```

3.  **Install Dependencies:**
    ```bash
    cd health-challenge-tracker
    npm install
    ```

4.  **Start the Development Server:**
    ```bash
    ng serve
    ```

    The app will be accessible at `http://localhost:4200/` in your browser.

## Code Coverage Report

This project aims for 100% code coverage to ensure code quality and reliability. To generate the code coverage report, run:

```bash
ng test --code-coverage
