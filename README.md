# Dashboard Project

A modern, responsive admin dashboard built with Angular. Includes real-time data visualization using charts, user management, and routing functionality.

## Setup Instructions

To get started with this project locally:

1. Clone the repository:
git clone https://github.com/nadeenmahmoudd/dashboard

2. Navigate into the project folder:
cd admin-dashboard


3. Install the project dependencies:
npm install

4. Run the project locally:
ng serve

5. Open your browser and go to `http://localhost:4200` to view the dashboard.

## Architecture

This project is built with Angular and follows a modular approach. The main architecture includes:

- **Modules**: 
- The app is divided into different modules like `DashboardModule`, `OrdersModule`, etc.
- **Components**:
- `DashboardComponent`: Displays key metrics and charts.
- `OrdersComponent`: Display all orders .
- **Services**:
- `OrdersService`: Handles API calls (mocked API).
- `ChartService`: Provides chart data for line and bar charts.
- **Routing**: 
- The app uses Angular's built-in routing to navigate between different views.

## Libraries Used

- **Angular**: The core framework for building the app.
- **ng2-charts**: For rendering line and bar charts.
- **Angular Material**: For UI components and responsive design.
- **RxJS**: For handling asynchronous operations.

## Design Choices

- **Responsive Design**: The dashboard is designed to be mobile-friendly using Angular Material's grid system.
- **Charting Library**: ng2-charts was chosen because of its simplicity and flexibility for creating interactive charts.

## Notes on Trade-offs

- Used mock APIs for simplicity. A real backend API can be integrated later.
- The charting library is limited in terms of customization, but it's sufficient for the needs of this dashboard.

## Additional Notes

- Some of the features, such as user authentication, have not been implemented yet.
- You can find the API mock data in the `src/assets/` folder.

---

## Development server

To start a local development server, run:

```bash
ng serve
