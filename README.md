## StellarBlue Timeseries Data Visualization - Vue.js

### Introduction

Welcome to the React Timeseries Data Visualization web app! The goal of this project was to show skill in using modern web technologies and to build a responsive, user-friendly interface for visualizing timeseries data with Vue.js.

This project has a twin-project as well, with the same goals and purposes, but built with React.js - please feel free to visit the Github repository on the following link:

[https://github.com/pizzaboi87/stellarblue-react](https://github.com/pizzaboi87/stellarblue-react)

### Core Features

#### Framework

This web app is developed using Vite, TypeScript and Vue.js, a progressive JavaScript framework known for its simplicity and flexibility in building user interfaces.

#### Responsive Design

Tailwind CSS is utilized to ensure the web app is accessible, responsive, and user-friendly across various devices and screen sizes.

#### Data Representation

The web app utilizes Firebase as the backend service for data storage and retrieval. It fetches timeseries datasets from Firebase and visualizes them using ApexCharts, a powerful and customizable charting library.

### Enhanced Features

#### Data Filtering

Implemented a date range picker component that allows users to filter data in the table and chart based on a selected start and end date. Users can easily analyze data trends within specific timeframes.

#### Interactive Data Control

Added checkboxes for each timeseries dataset, enabling users to show or hide specific datasets in the table and chart. This feature provides users with more control over the data they are viewing, enhancing the overall user experience.

### Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

### Running the Application

1. Once the dependencies are installed, run `npm run dev`.
2. The application will be accessible at `http://localhost:5173`.

### Project Structure

```
├── public
│   ├── favicon.png
│   └── logo.png
├── src
│   ├── components
│   │   ├── Chart.vue
│   │   ├── DataFilter.vue
│   │   ├── Failure.vue
│   │   ├── Footer.vue
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   ├── Loading.vue
│   │   └── Table.vue
│   ├── font
│   │   └── code-pro.otf
│   ├── types
│   │   └── types.ts
│   └── utils
│       ├── firebase.ts
│       └── store.ts
├── App.vue
├── main.ts
├── style.css
└── vite-env.d.ts
```

### Resources

- [Vue.js Documentation](https://vuejs.org/)
- [ApexCharts Documentation](https://apexcharts.com/docs/vue-charts/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

Feel free to reach out if you need further assistance or clarification!
