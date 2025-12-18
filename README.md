# React Frontend UI (Vite)

A simple React frontend project built with Vite, showcasing reusable UI components like a value section with accordion and a residencies slider.

## Tech Stack

- React
- Vite
- CSS (custom styles)
- react-accessible-accordion
- swiper
- framer-motion
- react-icons

## Project Structure

src/
├─ main.jsx                                                                                                                                                                                                          
├─ index.css                                                                                                                                                                                                         
├─ App.jsx                                                                                                                                                                                                           
├─ components/                                                                                                                                                                                                       
│ ├─ Value/                                                                                                                                                                                                          
│ │ ├─ Value.jsx                                                                                                                                                                                                     
│ │ └─ Value.css                                                                                                                                                                                                     
│ └─ Residencies/                                                                                                                                                                                                    
│ ├─ Residencies.jsx                                                                                                                                                                                                
│ └─ Residencies.css                                                                                                                                                                                                
└─ utils/                                                                                                                                                                                                            
├─ accordion.jsx                                                                                                                                                                                                    
├─ common.js                                                                                                                                                                                                        
└─ slider.json                                                                                                                                                                                                       

### Key Files

- `main.jsx` – React entry file; renders `<App />` to `#root` and imports global styles from `index.css`.
- `Value.jsx` – Component that displays a “Our Value” section using `react-accessible-accordion` and data from `utils/accordion`.
- `Residencies.jsx` – Component that renders a Swiper slider UI using data from `utils/slider.json` and slider configuration from `utils/common.js`.
- `accordion.jsx` – Exports accordion data used by `Value` component.
- `slider.json` – JSON data for the residencies slider cards.
- `common.js` – Shared configuration (e.g., `sliderSetting`) for Swiper and other utilities.
- `Value.css`, `Residencies.css`, `index.css` – Component-specific and global styling.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Yarn (or npm)

### Installation

Install dependencies
yarn

or
npm install

### Development

Start dev server
yarn dev

or
npm run dev

The app will be available at the URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

Common scripts (check your `package.json` to confirm):

- `dev` – Start Vite development server.
- `build` – Create production build.
- `preview` – Preview production build locally.

## Notes

- This project is **frontend-only**. There is no backend; all data is sourced from local JSON and JS utility files.
- Components are designed to be reusable; you can plug `Value` and `Residencies` into any page-level layout.
