# Dashboard Assignment

This is my submission for the frontend trainee dashboard assignment.  
I decided to use **React with TypeScript** and managed the state with **Redux Toolkit**. The app is bootstrapped using **Vite** for faster development.  

---

## Features I implemented
- The dashboard is completely driven by JSON data (see `src/data/seed.ts`).
- Each category can have multiple widgets.
- I added functionality to **add new widgets** (with name and text) or reuse existing ones.
- Widgets can be **removed** either by clicking the cross icon on the card or by unchecking them in the category manager.
- There is a **search bar** that searches across all widgets by name/text and also shows which categories they belong to.
- Users can also **create new categories** on the fly.
- I kept the UI simple, clean, and responsive with a custom dark theme.

---

## Tech stack
- **React + TypeScript**  
- **Redux Toolkit** for state management  
- **Vite** as the development/build tool  
- **Plain CSS** for styling  

---

## How to run locally

1. Clone this repo or extract the ZIP file.  
   ```bash
   git clone https://github.com/<your-username>/dashboard-assignment-react.git
   cd dashboard-assignment-react
   
Install the dependencies:npm install
Start the dev server: npm run dev


Open http://localhost:5173 in your browser.

(Optional) To create a production build:

npm run build
npm run preview

Project structure (short overview)
src/
├── components/   # All React components (Dashboard, Modals, Search, etc.)
├── store/        # Redux store and slice
├── data/         # Seed JSON for categories and widgets
├── App.tsx       # Main app component
├── main.tsx      # Entry point
└── index.css     # Styles

Why I chose this approach

I felt React + Redux Toolkit was the simplest way to handle the state changes (adding/removing widgets and managing categories). 
TypeScript gave me type safety, which makes the code easier to maintain. I also wanted the UI to be intuitive, so I designed a clean dark theme with modals for managing widgets.

Karre sandeep
