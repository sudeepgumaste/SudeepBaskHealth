# BaskHealth Live Data Dashboard

BaskHealth Live Data Dashboard is a web application developed for the BaskHealth hiring challenge. This features a highly customizable dashboard that fetches data from the provided API every 5 seconds and displays it in a visually appealing manner. It also includes a random styles generator that uses custom material design color palette to generate a random color scheme for the dashboard.

## Table of Contents

## Live Demo
Checkout the live demo by visiting [Live Demo](https://sudeep-bask-health.vercel.app/)

## Dashboard customization
The dashboard implemented is highly customizable. The user has a choice to toggle the visibility of the widgets with toggles provided on the sidebar. The user can drag around and resize the widgets using the widget header on desktops and a drag handle that shows up at right side of the header, as per their preference based on what data points they deem as important. Users also have an option to pick between dark and light mode. Please refer the demo video for a visual explanation.

![widget moving]('./screenshots/widget-move.png')

## Directory Structure
- `src/app` - layout, pages and api routes
- `src/components/` - Contains all the components used in the project. The components are further subdivided into different categories based on [atomic design methodology](https://atomicdesign.bradfrost.com/chapter-2/).
- 

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



