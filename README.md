# [Health Challenge Tracker](https://main--fyle-health-challenge-tracker.netlify.app/workout-tracker)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1bd225b7-56d3-410e-afdd-c73108f9c5d3/deploy-status)](https://app.netlify.com/sites/fyle-health-challenge-tracker/deploys)

A single-page Angular (v14+) application for tracking and visualizing your fitness challenges.

## Table of Contents

- [Solution Overview](#solution-overview)
- [Functionality & Details](#functionality--details)
- [Running the Application Locally](#running-the-application-locally)
- [Code Coverage Report](#code-coverage-report)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Live Demo & Deployment](#live-demo--deployment)
- [Deployment Instructions](#deployment-instructions)

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
```

After running this command you will find a folder names coverage in the project directory, you can find the coverage report there.

## Technologies Used

- **Angular (v14+):**  The core framework for building the application.
- **Angular Material:**  A UI component library for creating a polished and consistent user interface.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development and customization.
- **ngx-charts:** A charting library for Angular to create interactive data visualizations.
- **Jasmine & Karma:**  Testing frameworks used for unit testing the Angular components and services.
- **Local Storage:** The browser's local storage mechanism is used for persistent data storage.

## Folder Structure

    src/app
    ├── app.component.* (Root component)
    ├── components/
    │   ├── workout-tracker/ (Workout input form)
    │   ├── workout-list/ (Workout list display)
    │   └── workout-chart/ (Workout chart visualization)
    └── services/
        └── workout-data.service.ts (Manages workout data)
## Live Demo & Deployment

You can experience the Health Challenge Tracker in action:

- **Live Demo:** [https://main--fyle-health-challenge-tracker.netlify.app/workout-tracker](https://main--fyle-health-challenge-tracker.netlify.app)

Feel free to explore its features and provide feedback!

### Deployment Instructions

This application is hosted on Netlify.  Here are the basic steps to deploy your own Angular project to Netlify:

1. Build your project using `ng build --configuration production`.
2. Create a Netlify account (if you don't already have one).
3. Link your GitHub repository to Netlify.
4. Configure the build command and publish directory in Netlify settings.
5. Deploy! 

For more detailed instructions, refer to Netlify's documentation.

