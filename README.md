# BaskHealth Live Data Dashboard

BaskHealth Live Data Dashboard is a web application developed for the BaskHealth hiring challenge. This features a highly customizable dashboard that fetches data from the provided API every 5 seconds and displays it in a visually appealing manner. It also includes a random styles generator that uses custom material design color palette to generate a random color scheme for the dashboard.

## Table of Contents

## Live Demo
Checkout the live demo by visiting [Live Demo](https://sudeep-bask-health.vercel.app/)

## Dashboard customization an interactivity
The dashboard implemented is highly customizable. 
- The user has a choice to toggle the visibility of the widgets with toggles provided on the sidebar. 

![toggle](./screenshots/toggled-off.png)

- The user can drag around by  the widgets using the widget header on desktops and a drag handle that shows up at right side of the header as per their preference based on what data points they deem as important.


![widget moving](./screenshots/widget-move.png)

- The user can resize with the help of resize handle at the bottom right of every widget. 

![widget resize](./screenshots/widget-resize.png)

- The user has an option to pick between dark and light mode.

![dark mode](./screenshots/dark-mode.png)
![light mode](./screenshots/light-mode.png)

- The user can switch between the chart types for User Engagement widget by clicking on the chart type selector.

![chart type selector](./screenshots/user-engagement-1.png)
![chart type selector](./screenshots/user-engagement-2.png)

- The user can sort the tabular data by clicking on the column headers. The data rows smoothly animate and rearrange themselves within the table The live data coming in results in a smoothly animated rearrangement of table rows. If sort is turned on, the rows rearrange to reflect the live data every ping.

![Data sorting](./screenshots/data-rearrange-animation.png)


## Directory Structure
The directory structure is thoughtfully organized to facilitate easy navigation and maintain a well-structured codebase, contributing to a smooth developer experience and minimizing confusion. The code structure adheres to atomic design  for better component organization and reusability.

- `src/app` - layout, pages and api routes
- `src/components/` - Contains all the components used in the project. The components are further subdivided into different categories based on [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/).
- `src/constants` - Contains all the constants used in the project. Like widgets, their default configurations and localStorage keys 
- `src/hooks` - Contains all the custom hooks used in the project.
- `src/queries` - This project uses `@tanstack/react-query` for data fetching. This directory contains the api queries used in the project.
- `src/stores` - This project uses `zustand` for state management. This directory contains the state stores used in the project.
- `src/types` This directory contains the user defined types. Throught the project, the types that have been exported are prefixed with `T`.
- `src/utils` - This directory contains the utility functions used in the project.
- `src/wrappers` - This directory contains provider wrappers for the project. Currently, it only has the `QueryClientProvider` wrapper.

## Design and Architectural Decisions 


## Setup Instructions

> This project has been setup using pnpm as the package manager to avoid lock file being ignored.

If you haven't already, install pnpm by running the following command:

```bash
npm install -g pnpm
```

Then, clone the repository and install the dependencies:

```bash
git clone https://github.com/BaskHealth/live-data-dashboard.git
cd live-data-dashboard
pnpm install
```

### Environment variables required 
Create a .env file in the root directory of the project and the variable values featured in `.env.example` file provided in the root directory.

### Development mode
```bash
pnpm run dev
```

### Production mode
- Build the project
  ```bash
  pnpm run build
  ```
- Serve the built project
  ```bash
  pnpm run start
  ```



